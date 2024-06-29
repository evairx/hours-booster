import styled from '@emotion/styled'

 const LoadingContent = styled.div`
    width: 100%;
    height: 100lvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E131C;
`

const LoadingS = styled.div`
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

export default function Loading() {
    return (
        <LoadingContent>
            <LoadingS />
        </LoadingContent>
    )
}