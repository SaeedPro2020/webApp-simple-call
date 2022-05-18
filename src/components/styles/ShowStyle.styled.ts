import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { font-size: .5vw;  opacity:0 }
 5% { font-size: 0.5vw; opacity: 0 }
 10% { font-size: 0.5vw; opacity: 0 }
 15% { font-size: 0.5vw; opacity: 0 }
 20% { font-size: 0.5vw; opacity: 0 }
 25% { font-size: 0.5vw; opacity: 0 }
 28% { font-size: 0.5vw; opacity: 0 }
 35% { font-size: 0.9vw; opacity: 0.05 }
 40% { font-size: 0.9vw; opacity: 0.1 }
 45% { font-size: 0.9vw; opacity: 0.15 }
 52% { font-size: 0.9vw; opacity: 0.2 }
 58% { font-size: 0.9vw; opacity: 0.25 }
 60% { font-size: 0.9vw; opacity: 0.3 }
 63% { font-size: 0.9vw; opacity: 0.35 }
 67% { font-size: 0.9vw; opacity: 0.4 }
 71% { font-size: 0.9vw; opacity: 0.45 }
 75% { font-size: 0.9vw; opacity: 0.5 }
 79% { font-size: 0.9vw; opacity: 0.55 }
 82% { font-size: 0.9vw; opacity: 0.6 }
 86% { font-size: 0.9vw; opacity: 0.65 }
 89% { font-size: 0.9vw; opacity: 0.7 }
 91% { font-size: 0.9vw; opacity: 0.75 }
 95% { font-size: 0.9vw; opacity: 0.8 }
 96% { font-size: 0.9vw; opacity: 0.85 }
 97% { font-size: 0.9vw; opacity: 0.9 }
 98% { font-size: 0.9vw; opacity: 0.95 }
 100% { font-size: 0.9vw; opacity: 0.1 }
`

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 98%;
padding-bottom: 1%;
padding-left: 1%;
align-items: center;

@media (min-width: 600px) {
display: flex;
flex-direction: column;
width: 98%;
padding-bottom: 1%;
padding-left: 1%;
align-items: center;
}

h3 {
    text-align: center;
    margin-top: 0;
    font-size:1.3vw;
    margin-bottom: 1%;
}

li {
    font-size: 1.5vw;
    
    @media (min-width: 600px) {
        font-size: 0.9vw;

        animation-name: ${breatheAnimation};
        animation-duration: 4s;
        animation-iteration-count: 1;
    }
}
button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: none;
    align-items: center;
    padding-right: 0;
    background-color: white;
    margin-left: 15%;
    text-align: center;
}
`;

export const CloseBtn = styled.button`
width: .1vw;
margin: 0;
align-self: flex-end;
margin-right: 4vw;
border: none;
background-color: white;
padding: 0;

@media (min-width: 600px) {
    width: 1.5vw;
    margin: 0;
    align-self: flex-end;
    border: none;
    background-color: white;
    padding: 0; 
}

img {
    width: 4vw;
    @media (min-width: 600px) {
    width: 1.5vw;
    }
}
`;

const btnAnimation = keyframes`
 0% { opacity:0 }
 50% { opacity: 0 }
 95% { opacity: 1 }
 100% { opacity: 1 }
`

export const ButtonText = styled.p`
text-align: end;
font-size:0.8vw;
margin-right: 2px;
font-weight: bold;
cursor: pointer;
outline: none;

@media (min-width: 600px) {
animation-name: ${btnAnimation};
animation-duration: 5s;
animation-iteration-count: 1;
}

&:hover {
    color: #8f99f6
}

&:active {
    color: #8f99f6;
    transform: translateY(2px);
}
`;

export const imgBtn = styled.img`
width: 1.5%;
height: 2vw;
margin-right: 5px;
margin-top: 0;
margin-bottom: 0;

@media (min-width: 600px) {
width: 2vw;
height: 2vw;
margin-right: 5px;
margin-top: 0;
margin-bottom: 0;
}
`
