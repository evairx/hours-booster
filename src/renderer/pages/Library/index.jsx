const { ipcRenderer } = window.require('electron');
import { useEffect, useState } from 'react';
import * as Style from '../../styles/styled/library';
import { useTranslation } from 'react-i18next';
import AuthMenu from '../../components/authMenu';
import Menu from '../../components/menu';

import Clock from '../../icon/clock';
import Calendary from '../../icon/calendar'
import Boost from '../../icon/boost'
import Play from '../../icon/play';
import SearchIcon from '../../icon/search';

async function openData() {
    try {
        let data = await dataInfo();
        while (data === 'userNotLoggedIn') {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            data = await dataInfo();
        }

        sessionStorage.setItem('data', JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
}

function dataInfo() {
    return new Promise((resolve, reject) => {
        ipcRenderer.send('dataInfo');

        ipcRenderer.once('dataInfo', (event, data) => {
            try {
                if (data) {
                    resolve(data);
                } else if (data === 'userNotLoggedIn') {
                    reject(new Error('The user is not logged in'));
                } else {
                    reject(new Error('Error opening the library window'));
                }
            } catch (error) {
                reject(error);
            }
        });
    });
}

export default function Library() {
    const { t } = useTranslation();
    const [games, setGames] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [playerLevel, setPlayerLevel] = useState('');
    const [gameCount, setGameCount] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [boost, setBoost] = useState(false);
    const [timingCount, setTimingCount] = useState(0);
    const [userGamesBoosted, setUserGamesBoosted] = useState(0);
    const [setVisible, setSetVisible] = useState(1);

    useEffect(() => {
        const storedState = localStorage.getItem('state');
        if (storedState !== null) {
            setSetVisible(parseInt(storedState));
        }
     }, []);
    
    useEffect(() => {
        let interval;
    
        if (boost) {
          interval = setInterval(() => {
            setTimingCount(prevCount => prevCount + 1);
          }, 1000);
        } else {
          setTimingCount(0);
        }

        return () => clearInterval(interval);
    }, [boost]);

    useEffect(() => {
        setLoading(true);
        openData();

        setTimeout(() => {
            const existingData = sessionStorage.getItem('data');

            if (existingData) {
                const userData = JSON.parse(existingData);
                const { info, games, infoLevel, data } = userData;

                setAvatarUrl(info.avatar_url_full);
                setPlayerName(info.player_name);

                setTimeout(() => {
                    if (games && games.app_count) {
                        setGameCount(games.app_count);
                    } else {
                        console.error("The object 'games' or its property 'app_count' are not defined.");
                    }

                    if (infoLevel && Object.keys(infoLevel).length > 0) {
                        const userLevelValue = Object.values(infoLevel)[0];
                        setPlayerLevel(userLevelValue);
                    }
                }, 500);

                const sortedGames = games.apps.map((game) => ({ ...game, appid: game.appid })).sort((a, b) => a.name.localeCompare(b.name));
                setGames(sortedGames);

                if (data.isChecked) {
                    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

                    const duplicateAccount = accounts.find((account) =>
                        account.password === data.password && account.username === data.username
                    );

                    if (!duplicateAccount) {
                        accounts.push({
                            password: data.password,
                            username: data.username,
                            avatar_url_full: info.avatar_url_full,
                            player_name: info.player_name,
                        });

                        localStorage.setItem('accounts', JSON.stringify(accounts));
                    }
                }

                setLoading(false);
            } else {
                console.log("No data found in sessionStorage.");
            }
        }, 2000);
    }, []);

    function getUserGamesBoosted() {
        const boostData = JSON.parse(localStorage.getItem('boost')) || [];
        const userBoostData = boostData.find(entry => entry.user === playerName);
    
        if (userBoostData) {
          setUserGamesBoosted(userBoostData.games);
        } else {
          setUserGamesBoosted([]);
        }
    }

    useEffect(() => {
        getUserGamesBoosted();
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleAddRemoveGame = (appid) => {
        setSelectedGames((prevSelectedGames) => {
            if (prevSelectedGames.includes(appid)) {
                return prevSelectedGames.filter((id) => id !== appid);
            } else {
                return [...prevSelectedGames, appid];
            }
        });
    };

    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(searchText.toLowerCase())
    );

    function formatUnixTimestamp(unixTimestamp) {
        let date = new Date(unixTimestamp * 1000);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let day = date.getDate();

        let month = monthNames[date.getMonth()];

        let year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    function formatPlaytime(playtimeInMinutes) {
        let playtimeInHours = playtimeInMinutes / 60;

        let roundedPlaytime = playtimeInHours.toFixed(1);
        if (roundedPlaytime.endsWith('.0')) {
            return Math.floor(playtimeInHours).toString();
        }
        return roundedPlaytime;
    }

    const formatTimingCount = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
    
        return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleVisible = () => {
        if (setVisible === 1) {
            setSetVisible(0);
            localStorage.setItem('state', 0);
        } else {
            setSetVisible(1);
            localStorage.setItem('state', 1);
        }
    }

    const handleBoost = () => {
        ipcRenderer.send('start-boost', { selectedGames, setVisible });

        if (boost) {
            let boostData = JSON.parse(localStorage.getItem('boost')) || [];
      
            selectedGames.forEach(selectedAppid => {
              let userEntry = boostData.find(entry => entry.user === playerName);
      
              if (!userEntry) {
                userEntry = {
                  user: playerName,
                  games: []
                };
                boostData.push(userEntry);
              }
      
              let gameEntry = userEntry.games.find(g => g.appid === selectedAppid);
      
              if (!gameEntry) {
                gameEntry = {
                  appid: selectedAppid,
                  timing: 0
                };
                userEntry.games.push(gameEntry);
              }
      
              // Sumar el tiempo acumulado al existente
              gameEntry.timing += timingCount;
            });
      
            localStorage.setItem('boost', JSON.stringify(boostData));
        }
  
        setBoost(!boost);
        setTimingCount(0);
        getUserGamesBoosted();
    };

    const handleBoostStop = () => {
        ipcRenderer.send('stop-boost', setVisible);

        setBoost(!boost);
        setTimingCount(0);
        getUserGamesBoosted();
    }

    const formatTiming = (seconds) => {
        if (seconds < 60) {
          return `${seconds} segundos`;
        } else if (seconds < 3600) {
          const minutes = Math.floor(seconds / 60);
          return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
        } else {
          const hours = Math.floor(seconds / 3600);
          const remainingMinutes = Math.floor((seconds % 3600) / 60);
          return `${hours} hora${hours !== 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes !== 1 ? 's' : ''}`;
        }
    };

    const getTimingById = (id) => {
        const game = userGamesBoosted.find(game => game.appid === id);
        return game ? game.timing : 0;
    };

    return (
        <>
            {loading ? (
                <Style.LoadingContent>
                    <AuthMenu />
                    <Style.Loading />
                </Style.LoadingContent>
            ) : (
                <>
                    <Menu name={playerName} avatar={avatarUrl} boost={boost} handleVisible={handleVisible} setVisible={setVisible}/>
                    <Style.SubMenu>
                        <div style={{position: 'relative'}}>
                            <Style.Search
                                type="text"
                                value={searchText}
                                onChange={handleSearchChange}
                                placeholder={`${t('Search')}`}
                            />
                            <div style={{position: 'absolute', right: 5, top: 5}}>
                                <SearchIcon/>
                            </div>
                        </div>
                        {boost ? (
                            <Style.BoostStopBtn onClick={handleBoostStop}>
                                {t('Stop').toUpperCase()}
                            </Style.BoostStopBtn>
                        ):(
                            selectedGames.length != 0 ? (
                                <Style.BoostBtn onClick={handleBoost}>
                                    <Play/>
                                    {t('Run').toUpperCase()}
                                </Style.BoostBtn>
                            ):(
                                <Style.BoostBtnDisabled disabled>
                                    <Play/>
                                    {t('Run').toUpperCase()}
                                </Style.BoostBtnDisabled>
                            )
                        )}
                    </Style.SubMenu>
                    <Style.Space />
                    <Style.Content>
                        <Style.Header>
                            <Style.Counts>{t('AllGames').toUpperCase()} ({gameCount ? gameCount : '0'})</Style.Counts>
                            <Style.Counts>{t('Selected').toUpperCase()} ({selectedGames.length})</Style.Counts>
                        </Style.Header>
                        <Style.Container>
                            <Style.ContentGames>
                                {filteredGames.map((game, index) => {
                                    const isSelected = selectedGames.includes(game.appid);

                                    return (
                                        <Style.Card key={index}>
                                            <Style.Poster src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`} draggable="false" alt={game.name} />
                                            <Style.RelativeContent>
                                                <Style.Name>{game.name}</Style.Name>
                                                <Style.CardContent>
                                                {boost ? (
                                                    isSelected ? (
                                                        <Style.RunningButton>
                                                            Running
                                                        </Style.RunningButton>
                                                    ) : (
                                                        <Style.AddButtonDisabled disabled>
                                                            Select
                                                        </Style.AddButtonDisabled>
                                                    )
                                                ) : (
                                                    isSelected ? (
                                                        <Style.RemoveButton onClick={() => handleAddRemoveGame(game.appid)}>
                                                            Remove
                                                        </Style.RemoveButton>
                                                    ) : (
                                                        <Style.AddButton onClick={() => handleAddRemoveGame(game.appid)}>
                                                            Select
                                                        </Style.AddButton>
                                                    )
                                                )}
                                                    <Style.Tag>
                                                        <Style.TagIcon>
                                                            <Calendary />
                                                        </Style.TagIcon>
                                                        <Style.TagContent>
                                                            <Style.TagTitle>{t('LastPlayed').toUpperCase()}</Style.TagTitle>
                                                            <Style.TagText>{formatUnixTimestamp(game.rtime_last_played)}</Style.TagText>
                                                        </Style.TagContent>
                                                    </Style.Tag>
                                                    <Style.Tag>
                                                        <Style.TagIcon>
                                                            <Clock />
                                                        </Style.TagIcon>
                                                        <Style.TagContent>
                                                            <Style.TagTitle>{t('PlayTime').toUpperCase()}</Style.TagTitle>
                                                            <Style.TagText>{formatPlaytime(game.playtime_forever)} {t('HoursPlayed')}</Style.TagText>
                                                        </Style.TagContent>
                                                    </Style.Tag>
                                                    <Style.Tag>
                                                        <Style.TagIcon>
                                                            <Boost />
                                                        </Style.TagIcon>
                                                        <Style.TagContent>
                                                            <Style.TagTitle>{t('BoostTime').toUpperCase()}</Style.TagTitle>
                                                            <Style.TagText>{formatTiming(getTimingById(game.appid))}</Style.TagText>
                                                        </Style.TagContent>
                                                    </Style.Tag>
                                                </Style.CardContent>
                                            </Style.RelativeContent>
                                        </Style.Card>
                                    );
                                })}
                            </Style.ContentGames>
                        </Style.Container>
                        <Style.BoostTimingContent style={{bottom: boost ? '20px': '-65px'}}>
                            <p>{formatTimingCount(timingCount)}</p>
                        </Style.BoostTimingContent>
                    </Style.Content>
                </>
            )}
        </>
    );
}