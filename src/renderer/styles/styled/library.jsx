import styled from "@emotion/styled";

export const LoadingContent = styled.div`
    width: 100%;
    height: 100lvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E131C;
`

export const Loading = styled.div`
    width: 42px;
    height: 42px;
    border: 6px solid rgba(6, 191, 255, 0.2); 
    border-top-color: #06BFFF;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

export const Space = styled.div`
    height: .600rem;
`

export const SubMenu = styled.nav`
    display:flex;
    justify-content:right;
    align-items:center;
    background-color: #232B45;
    transition: all 0.2s;
    top:4rem;
    padding: 1rem 4rem;
    height: 3rem;
    overflow:hidden;
    top:0;
    width:100%;
    z-index: 999;
    gap: 1rem;
`

export const Search = styled.input`
    background:#1C243A;
    border:none;
    border-radius: 6px;
    height: 2.2rem;
    width: 350px;
    padding: 0.4rem .7rem;
    color: #ffffff;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color:#4B5972;
        font-size: 1rem;
    }
`

export const BoostBtn = styled.button`
    height: 2.2rem;
    background: #A1CD44;
    border: none;
    color: #0E141B;
    font-size: .900rem;
    font-weight: 600;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: .2rem;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background: #b2d566;
    }
`

export const BoostBtnDisabled = styled.button`
    height: 2.2rem;
    background: #A1CD44;
    border: none;
    color: #0E141B;
    font-size: .900rem;
    font-weight: 600;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: .2rem;
    opacity: 0.5;
`

export const BoostStopBtn = styled.button`
    height: 2.2rem;
    background: #ff4242;
    border: none;
    color: #ffff;
    font-size: .900rem;
    font-weight: 600;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: .2rem;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background: #fc6868;
    }
`

export const Content = styled.div`
    padding: .200rem 4rem;
    position: relative;
    overflow: hidden;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

export const Counts = styled.p`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
`

export const Container = styled.div`
    height: 71.9lvh;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 1rem;
`

export const ContentGames = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    gap: 1rem;
`

export const Card = styled.div`
    background-color:#171F2D;
    width: 100%;
    padding: .400rem;
    display: flex;
    gap:1rem;
`

export const RelativeContent = styled.div`
    position: relative;
`

export const CardContent = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 2.1rem;
`

export const AddButton = styled.button`
    background: #66C0F4;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #0E141B;
    font-weight: 600;
    padding: 0 2rem;
    cursor: pointer;

    &:hover {
        background: #92d7fe;
    }
`

export const AddButtonDisabled = styled.button`
    background: #66C0F4;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #0E141B;
    font-weight: 600;
    padding: 0 2rem;
    opacity: 0.5;
`

export const RemoveButton = styled.button`
    background: #4B619B;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    padding: 0 2rem;
    cursor: pointer;

    &:hover {
        background: #6985d2;
    }
`

export const RunningButton = styled.button`
    background: #A1CD44;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #0E141B;
    font-weight: 600;
    padding: 0 2rem;
`

export const Tag = styled.div`
    display: inline-flex;
    align-items: center;
    color: #76808C;
`;

export const TagIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
`;

export const TagContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFFFFF;
    width: 100%;
`;

export const TagTitle = styled.p`
    font-size: .9rem;
    font-weight: 500;
    margin: 0;
    color: #76808C;
    width: 100%;
`;

export const TagText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: #FFFFFF;
    width: 100%;
    margin-top: 5px;
`;

export const Name = styled.p`
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
`

export const Poster = styled.img`
    width: 293px;
    height: 102px;
    object-fit: cover; 
    object-position: center;
`;

export const BoostTimingContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background:#ffffff35;
    padding: 0.3rem 0.5rem;
    height: 3rem;
    width: 10rem;
    border-radius: 9999px;
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    border: 2px solid #ffffff29;
    box-shadow: 0 0 5px #ffffff29,
                0 0 10px #ffffff29, 
                0 0 20px #ffffff29;
`