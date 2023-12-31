import styled from '@emotion/styled';

export const GamesList = styled.li`
    display: flex;
    align-items: center;
    gap: .500rem;
    margin-bottom: .600rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all .3s ease-out;
    cursor:pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.37); /* Cambiamos el color de fondo al presionar el botón */
        transition: all .3s ease-out;
    }
`

export const ContainerLoad = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .titleLoad {
        font-size: 1.2rem;
        font-weight: 600;
    }
`

export const ContentLoad = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: .400rem;
`

export const Loading = styled.div`
    border: 5px solid #3a3a3a;
    border-top: 5px solid #ffffff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
`

export const Container = styled.section`
    margin-top:1.5rem;
    position:relative;
`

export const Header = styled.div`
    display: flex;
    justify-content: left;
    backdrop-filter: blur(30px);
    padding: 1.100rem;
    gap:1rem;
    -webkit-border-radius: 0px 0px 20px 20px;
    -moz-border-radius: 0px 0px 20px 20px;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.65); 
    box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.65);

    .avatar {
        border-radius: 10px;
        width: 64px;
        height: 64px;
    }

    .playerName {
        font-size: 1.1500rem;
        font-weight: 600;
        display: flex;
        display: flex;
        align-items: center;
        gap:.400rem;
    }

    .countGames {
        font-size: .800rem;
        font-weight: 500;
        color: #dddddd;
    }
`

export const ContainerGames =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    border: 1px solid #363636;
    padding: 10px;
    margin-top: 1rem;
    width: 330px;
    height: 300px;
    float: left;
    margin-right: 20px;
    backdrop-filter: blur(20px);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.65); 
    box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.65);

    .list-games-ul {
        overflow: auto;
        width: 315px;
        height: 250px;
        z-index: 1;
    }

    .poster {
        border-radius: 8px;
    }

    .hours {
        font-size: .800rem;
        font-weight: 400;
        color: #dddddd;
    }
`

export const HeaderBox = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 2.5rem;
    width: 100%;
    background-color: #000000a6;
    z-index: 20;
    padding: .400rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.65); 
    box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.65);

    .right-content {
        display: flex;
        gap: .400rem;
        align-items: center;
    }
    

    .box-title {
        font-size: 1.2rem;
        font-weight: 550;
    }

    .searchContent {
        position: relative;
    }
    
    .search {
        background: #2e2e2ea2;
        width: 150px;
        height: 30px;
        outline: none;
        border: none;
        color: #ffff;
        padding: 0 1.5rem;
        border-radius: 5px;
    }
    
    .searchIco {
        width: 16px;
        height: 16px;
        position: absolute;
        left: .400rem;
        top: .400rem;
        background-image: url("data:image/svg+xml,%3Csvg width='16px' height='16px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23c4c4c4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }
    
`

export const Space = styled.div`
    height: 2rem;
`

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: .600rem;
`

export const Button = styled.button`
    width: 150px;
    margin-top: .800rem;
    height: 40px;
    font-size: 1.1rem;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    background: rgba(122, 122, 122, 0.199); 
    backdrop-filter: blur(20px); 
    color: #ffff;
    border: 1px solid #757575;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.37);
    }
`