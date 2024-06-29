const { ipcRenderer } = window.require('electron');
import * as Style from '../styles/styled/menu';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

import LogoMenu from '../icon/logomenu'
import SettingsIcon from '../icon/settings';
import BackIcon from '../icon/back'

import languages from '../locales/global.json';

import i18n from '../../../i18n';

function menu({name, avatar, boost, handleVisible, setVisible}) {
  const [openSettings, setOpenSettings] = useState(false);
  const [lang, setLang] = useState(true);
  const { t } = useTranslation();

  const languageKeys = Object.keys(languages);

  function handleMinimizeClick() {
    try {
      ipcRenderer.send('manualMinimize');
    } catch (error) {
      console.error('Error al minimizar la ventana:', error);
    }
  }

  function handleQuitApp() {
    try {
        ipcRenderer.send('manualClose');
      } catch (error) {
        console.error('Error al minimizar la ventana:', error);
      }
  }

  const HandleSettings = () => {
      setOpenSettings(!openSettings);
      console.log(openSettings)
  }

  const handleLang = () => {
    setLang(!lang);
  }


  const changeLang = (key) => {
    handleLang()
    i18n.changeLanguage(key);
  };

  return (
    <Style.Menu>
      <Style.LeftContent>
        <LogoMenu />
      </Style.LeftContent>
      <Style.RightContent>                
        <Style.Settings style={{opacity: openSettings ? '1': '0', pointerEvents: openSettings ? 'auto': 'none'}}>
          {lang ? (
            <>
              <Style.SettignTitle>{t('Settings')}:</Style.SettignTitle>
                <Style.SettingsContent>
                  <Style.Btn onClick={handleLang}>
                    {t('Lang')}
                    <Style.Beta>BETA</Style.Beta>
                  </Style.Btn>
                  <Style.Btn onClick={handleVisible}>
                    {t('Status')}
                    {setVisible === 1 ? (
                      <Style.Visible>{t('Visible')}</Style.Visible>
                    ) : (
                      <Style.Invisible>{t('Invisible')}</Style.Invisible>
                    )}
                  </Style.Btn>
                </Style.SettingsContent>
            </>
          ):(
            <>
              <Style.SettignTitle onClick={handleLang} style={{cursor: 'pointer', display: 'flex',alignItems: 'center'}}>
                <BackIcon/>
                {t('Lang')}
              </Style.SettignTitle>
              <Style.SettingsContent>
                {languageKeys.map((key) => (
                  <Style.Btn onClick={() => changeLang(key)} key={key}>{languages[key].name}</Style.Btn>
                ))}
              </Style.SettingsContent>
            </>
          )}
        </Style.Settings>
        <Style.SettingsBtn onClick={HandleSettings}>
          <SettingsIcon />
        </Style.SettingsBtn>
        <Style.UserContent style={{background: boost ? '#4d6b2299': '#353E4F'}}>
          <img src={avatar} alt="Avatar" draggable="false" width="32" height="32"/>
          <Style.Name>{name}</Style.Name>
        </Style.UserContent>
        <ul>
          <Style.Minimize onClick={handleMinimizeClick}/>
          <Style.CloseWindow onClick={handleQuitApp}/>
        </ul>
      </Style.RightContent>
    </Style.Menu>
  );
}

export default menu;
