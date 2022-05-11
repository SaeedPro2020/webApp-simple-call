import styled from "styled-components"

export const Container = styled.div`
display: flex;
width: 100%;
display: flex;
flex-direction: column;
`

export const UserCard = styled.div`
background-color: white;
display: flex;
flex-direction: row;
border-radius: 15px;
width: 60%;
height: 10%;
margin-left: 15%;
margin-top: 1%;
text-align: left;

img {
    width: 10vw;
    height: 10vw;
    margin: 2vw;
    border-radius: 3px; 
}

div {
    display: flex;
    flex-direction: column;
    width: 60%;

    div {
        display: flex;
        flex-direction: row;
        margin-top: 1vw;
        margin-right: 0.5vw;
        align-items: flex-end;
    }
}

h3 {
    align-self: center;
    font-size:1.3vw;
    margin-bottom: 5%;
    margin-top: 2vw;
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
`

export const CardIcon = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-left: 15%;

img {
    width: 2vw;
    height: 2vw;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}

p {
    margin-left: 10px;
    font-size:1vw;
    margin-bottom: 0.4%;
    margin-top: 0;
}
`

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

export const UserPosts = styled.div`
background-color: white;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border-radius: 10px;
width: 40%;
margin-left: 30%;
margin-top: 1%;
margin-bottom: 1%;
text-align: left;
`

export const CloseBtn = styled.button`
width: 1.5vw;
margin: 0;
align-self: flex-end;
border: none;
background-color: white;
padding: 0;
`;