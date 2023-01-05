import styled from "styled-components";
import bGimage from '../../assets/bg.png'






export const AppContainer = styled.div`
background-image: url(${bGimage.src});
background-repeat: no-repeat;
background-size: cover;
background-position:center;
border: solid transparent 1px;
padding: 2rem;

`;

export const MainContainer = styled.main`
max-width: 90rem;
min-height: 100vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`;