import styled, { keyframes } from "styled-components";


const breatheAnimation = keyframes`
 0% { width: 4%; 0.1}
 20% { width: 8%; opacity: 0.2 }
 30% { width: 12%; opacity: 0.3 }
 40% { width: 16%; opacity: 0.4 }
 50% { width: 20%; opacity: 0.5 }
 60% { width: 24%; opacity: 0.6 }
 70% { width: 28%; opacity: 0.7 }
 80% { width: 32%; opacity: 0.8 }
 90% { width: 36%; opacity: 0.9 }
 100% { width: 40%; opacity: 1 }
`

export const UserPosts = styled.div`

background-color: white;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border-radius: 15px;
width: 50%;
margin-left: 20%;
margin-top: 1%;
margin-bottom: 1%;
text-align: left;

@media (min-width: 600px) {
background-color: white;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border-radius: 15px;
width: 40%;
margin-left: 10%;
margin-top: 1%;
margin-bottom: 1%;
text-align: left;

animation-name: ${breatheAnimation};
animation-duration: .2s;
animation-iteration-count: 1;
}

div {
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
}

input {
    margin-left: 5%;
    border-width: thin;
    border-radius: 8px;
    width: 50%;
    margin-top: 4%;
    
    @media (min-width: 600px) {
    margin-left: 3%;
    border-width: thin;
    border-radius: 8px;
    width: 50%;
    margin-top: 4%;
    }
}

p {
    margin-left: 1%;
    padding: 2%;
    font-size: 1.1vw;
    font-weight: 600;
    margin-top: 5%;

    @media (min-width: 600px) {
    margin-left: 1%;
    padding: 2%;
    font-size: 1.1vw;
    font-weight: 600;
    margin-top: 2.5%;
    }
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