import styled from '@emotion/styled'

export const Container = styled.section`
    width: 100%;
    height: 100lvh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0E131C;
`

export const Content = styled.div`
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1.1rem;
    font-weight: 600;
    background: #4B619B;
    color: #fff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color .3s;

    &:hover {
        background-color: #4C566A;
    }
`