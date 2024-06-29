import React, { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
const { ipcRenderer } = window.require('electron');
import i18n from '../../../i18n';
import lang from '../locales/global.json'

import version from '../../../version.json'

import Update from './update';
import Login from './auth/Login';
import Library from './Library';

import LoadingPage from '../components/loading';

function routes() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVersion() {
      try {
        const res = await fetch('https://raw.githubusercontent.com/evairx/hours-booster/main/version.json');
        const data = await res.json();
        const { version: remoteVersion } = data;
        
        const localVersion = version.version

        if (remoteVersion !== localVersion) {
          setUpdateAvailable(true);
          setLoading(false);
        } else {
          setUpdateAvailable(false);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching or comparing versions:', error);
        setUpdateAvailable(true);
        setLoading(false);
      }
    }

    getVersion();
  }, []);

  useEffect(() => {
    ipcRenderer.send('getOsLanguage');

    const normalizeLanguage = (langCode) => {
      const normalized = langCode.split('-')[0];
      return normalized;
    };

    const getLanguage = (osLanguage) => {
      let newLanguage = 'en';

      const normalizedLang = normalizeLanguage(osLanguage);

      if (lang[normalizedLang]) {
        newLanguage = normalizedLang;
      }

      return newLanguage;
    };

    ipcRenderer.on('osLanguage', (event, osLanguage) => {
      const selectedLanguage = getLanguage(osLanguage);
      i18n.changeLanguage(selectedLanguage);
    });

    return () => {
      ipcRenderer.removeAllListeners('osLanguage');
    };
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      {loading ? (
        <LoadingPage/>
      ):(
        <Routes>
          {updateAvailable ? (
            <Route path="/" element={<Update/>} />
          ) : (
          <>
            <Route path="/" element={<Login/>} />
            <Route path="/library" element={<Library />} />
          </>
        )}
        </Routes>
      )}
    </>
  );
}

export default routes;