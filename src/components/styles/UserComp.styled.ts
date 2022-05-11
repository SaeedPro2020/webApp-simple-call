import styled from "styled-components";

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
    border-radius: 15px; 
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
    align-items: center;
    padding-right: 0;
    background-color: white;
    margin-left: 40%;
    margin-top: 10%;
    text-align: center;
    border-radius: 8px;
    width: 10%;
    font-size: 1vw;

    &:hover {
        background-color: #8f99f6;
        color: white;
    }

    &:active {
        color: white;
        transform: translateY(2px);
    }
}
`;

export const UserPosts = styled.div`
background-color: white;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border-radius: 15px;
width: 40%;
margin-left: 30%;
margin-top: 1%;
margin-bottom: 1%;
text-align: left;

div {
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
}

input {
    margin-left: 3%;
    border-width: thin;
    border-radius: 8px;
    width: 50%;
    margin-top: 4%;
}

p {
    margin-left: 1%;
    padding: 2%;
    font-size: 1.1vw;
    font-weight: 600;
    margin-top: 2.5%;
}
`;

export const BtnConfirm = styled.button`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 0;
    background-color: white;
    margin-left: 40%;
    margin-top: 10%;
    border-radius: 5px;
    width: 15%;
    margin-bottom: 10px;
    font-size: 1vw;


    span {
        text-align: center;
        margin-left: 10%;
    }
    

    &:hover {
        background-color: red;
        color: white;
    }

    &:active {
        color: white;
        transform: translateY(2px);
    }
    `;
