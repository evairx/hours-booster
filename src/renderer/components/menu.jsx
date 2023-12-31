const { ipcRenderer } = window.require('electron');
import styled from '@emotion/styled';
import React from 'react';

const Menu = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  transition: all 0.2s;
  height: 1.50rem;
  position:fixed;
  z-index:999;
  overflow:hidden;
  top:0;
  width:100%;
  background-color: #91919148;
  backdrop-filter: blur(50px);
  border-bottom: 2px solid #3b3b3bbe;
  z-index: 100;
  -webkit-app-region: drag;
  z-index: 999;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Title = styled.h1`
  color: rgb(228, 228, 228);
  font-size: .900rem;
  font-weight: 600;
  padding: 0 10px;
`

const Minimize = styled.li`
  height: 18px;
  width: 24px;
  list-style-type: none;
  cursor:pointer;
  -webkit-app-region: no-drag; 
  background-image: url("data:image/svg+xml,%3Csvg width='24px' height='18px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M4 12L20 12' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
`

const CloseWindow =  styled.li`
  height: 24px;
  width: 24px;
  -webkit-app-region: no-drag; 
  list-style-type: none;
  background-image: url("data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z' fill='%23ffffff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  transition: all .3s ease-out;
  cursor:pointer;
    
  &:hover {
    background-image: url("data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z' fill='red'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  }
`

function menu() {
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

  return (
    <Menu>
      <Title>Hours Booster</Title>
      <ul>
        <Minimize onClick={handleMinimizeClick}/>
        <CloseWindow onClick={handleQuitApp}/>
      </ul>
    </Menu>
  );
}

export default menu;
