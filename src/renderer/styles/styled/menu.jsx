import styled from "@emotion/styled";

export const Menu = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  transition: all 0.2s;
  padding: 1rem;
  height: 4rem;
  overflow:hidden;
  top:0;
  width:100%;
  -webkit-app-region: drag;
  z-index: 999;
  background: #0E131C;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const LeftContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: .800rem;
`


export const RightContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: .800rem;
`

export const SettingsBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #384151;
    border: none;
    padding: 0.4rem;
    border-radius: 6px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -webkit-app-region: no-drag; 
    &:hover {
        opacity: 1;
    }
`

export const Settings = styled.div`
    background-color: #38415186;
    position: absolute;
    top: 3.6rem;
    right: 125px;
    min-width: 250px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    padding: 1rem 0.5rem;
    backdrop-filter: blur(20px);
    z-index: 999;
`

export const SettignTitle = styled.p`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    margin-left: 0.5rem;
`

export const SettingsContent = styled.div`
    margin-top: 1rem;
`

export const Beta = styled.span`
    background: linear-gradient(to right, #06BFFF, #2D74FF);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 900;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
`

export const Visible = styled.div`
    background: #4c6b22;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 900;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
`

export const Invisible = styled.div`
    background: #7d7d7d;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 900;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
`

export const Btn = styled.button`
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease-in-out;
    gap: 1rem;

    &:hover {
        background-color: #384151;
    }
`

export const UserContent = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    gap: .600rem;
    padding: .200rem;
    min-width:200px;
    margin-right: 1rem;
    -webkit-app-region: no-drag; 
`

export const Name = styled.p`
    color: #fff;
    font-size: .950rem;
`

export const Minimize = styled.li`
  height: 32px;
  width: 32px;
  list-style-type: none;
  cursor:pointer;
  transition: all .3s ease-out;
  -webkit-app-region: no-drag; 
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16H24' stroke='%23353E4F' stroke-width='5.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

  &:hover {
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16H24' stroke='%232D74FF' stroke-width='5.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
   }
`

export const CloseWindow =  styled.li`
  height: 48px;
  width: 48px;
  -webkit-app-region: no-drag; 
  list-style-type: none;
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.8786 24L13.9392 31.9394L16.0605 34.0608L24 26.1214L31.9394 34.0608L34.0608 31.9394L26.1214 24L34.0606 16.0608L31.9392 13.9395L24 21.8786L16.0608 13.9395L13.9394 16.0608L21.8786 24Z' fill='%23353E4F'/%3E%3C/svg%3E%0A");
  transition: all .3s ease-out;
  cursor:pointer;
    
  &:hover {
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.8786 24L13.9392 31.9394L16.0605 34.0608L24 26.1214L31.9394 34.0608L34.0608 31.9394L26.1214 24L34.0606 16.0608L31.9392 13.9395L24 21.8786L16.0608 13.9395L13.9394 16.0608L21.8786 24Z' fill='%232D74FF'/%3E%3C/svg%3E%0A");
  }
`
