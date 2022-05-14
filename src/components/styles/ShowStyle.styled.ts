import styled from "styled-components";
// 
export const Container = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 5%;
padding-left: 1%;
align-items: center;

h3 {
    text-align: center;
    margin-top: 0;
    font-size:1.3vw;
    margin-bottom: 1%;
}

li {
    font-size: 0.9vw;
}

img {
    width: 1.5vw;
    height: 1.5vw;
    align-self: left;
    align-content: left;
    margin: 0;
    padding: 0;
    border: none;
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
width: 1.5vw;
margin: 0;
align-self: flex-end;
border: none;
background-color: white;
padding: 0;
`;

export const ButtonText = styled.p`
text-align: end;
font-size:0.8vw;
margin-right: 2px;
font-weight: bold;
cursor: pointer;
outline: none;

&:hover {
    color: #8f99f6
}

&:active {
    color: #8f99f6;
    transform: translateY(2px);
}
`;
