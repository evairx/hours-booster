const { app, BrowserWindow, ipcMain } = require('electron');
const steamUser = require('steam-user');
const { join } = require('path');
const config = require('../../config')

let mainWindow;

app.name = 'Hours Booster';

const url = config.VITE_DEV_SERVER_UR

const ico = join(__dirname, '../../public', 'icon.ico');

function createMainWindow() {

    mainWindow =  new BrowserWindow({
      width: 1280,
      height: 720,
      resizable: false,
      fullscreenable: false,
      frame: false,
      icon: ico,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      title: 'Hours Booster',
    });

    mainWindow.loadURL(url)

    ipcMain.on('manualMinimize', () => {
      mainWindow.minimize();
    });

    ipcMain.on('manualClose', () => {
      app.quit();
    });
}

app.whenReady().then(() => {
  createMainWindow();

  const osLanguage = app.getLocale();

  ipcMain.on('getOsLanguage', (event) => {
    event.sender.send('osLanguage', osLanguage);
  });
  
  ipcMain.on('form-data', (event, data) => {
      handleFormData(data);
  });
  
  app.on('window-all-closed', () => {
    app.quit();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

let userLoggedIn = false;
let steamGuardIn = false;

ipcMain.on('libraryWin', async (event) => {
  if (!userLoggedIn) {
    event.sender.send('libraryWin', 'userNotLoggedIn');
    return;
  }
  event.sender.send('libraryWin', 'correct');
});


ipcMain.on('codeResponse', (event) => {
  if (!steamGuardIn) {
    event.sender.send('codeResponse', 'userNotLoggedIn');
    return;
  }
  event.sender.send('codeResponse', 'correct');
})

function handleFormData(data) {
  const { username, password } = data;

  if (!username || !password) {
    console.log('user and pass empty')
    return;
  }

  const user = new steamUser();

  user.on('error', handleSteamError);

  user.logOn({ accountName: username, password: password });

  user.on('steamGuard', openSteamGuardCodeWindow);

  function openSteamGuardCodeWindow(domain, callback) {
    console.log('open steamGuardCodeWindow')
    steamGuardIn = true;
    ipcMain.on('submit-code', (event, enteredCode) => {
      callback(enteredCode);
    });
  }

  user.on('loggedOn', () => {
     if (user.steamID != null) { 
      const steamid = user.steamID;

      let info;
      let infoLevel;
      let games;
      let infoSent = false;
      let levelSent = false;
      let gamesSent = false;

      ipcMain.on('dataInfo', (event) => {
        if (!infoSent && !levelSent && !gamesSent) {
          event.sender.send('dataInfo', 'userNotLoggedIn');
        } else {
          event.sender.send('dataInfo', { info, infoLevel, games, data});
        }
      });
      
      user.getPersonas([steamid], async function (err, personas) {
        if (err) {
          console.log(err.message);
        } else {
          info = personas[steamid];
          const player = info.player_name;
          infoSent = true;
          console.log('Successfully logged on - ' + player);
        }
      });

      user.getSteamLevels([steamid], function(err, users) {
        if (err) {
          console.log(err.message);
        } else {
          infoLevel = users
          levelSent = true;
        }
      })

      user.getUserOwnedApps([steamid], function (err, response) {
        if (err) {
          console.log(err.message);
        } else {
          games = response;
          gamesSent = true;
        }
      });

      userLoggedIn = true;
      
      ipcMain.on('start-boost', (event, data) => {
        console.log('start boost');
        const games = data.selectedGames;
        const visible = data.setVisible;

        user.setPersona(visible);
        user.gamesPlayed(games);
      });
      
      ipcMain.on('stop-boost', (event, data) => {
        console.log('stopped boost');

        const visible = data.setVisible;

        user.setPersona(visible);
        user.gamesPlayed([]);
      });
     }
  })
}

function handleSteamError(err) {
  const errorMessages = {
    'InvalidPassword': {
      title: 'passError',
    },
    'RateLimitExceeded': {
      title: 'rateLimit',
    },
  };

  const { title } = errorMessages[err.message] || errorMessages['InvalidPassword'];
  if (mainWindow) {
    mainWindow.webContents.send('error-occurred',title);
  }
}