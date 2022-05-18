import styled, { keyframes } from "styled-components";

interface Props {
    marginLeft: string,
    marginTop: string,
    border: string,
    borderRadius: string,
    width: string,
    bg: string,
    hoverColor: string,
    activeColor: string,
    transform: string,
    borderWidth: string,

}


export const Container = styled.div`
display: flex;
width: 100%;
display: flex;
flex-direction: column;

@media (min-width: 600px) {
display: flex;
width: 99%;
display: flex;
flex-direction: row;
}
`

export const UserCard = styled.div<Props>`
background-color: white;
display: flex;
flex-direction: row;
border-radius: 15px;
width: 60%;
height: 10%;
margin-left: 15%;
margin-top: 1%;
text-align: left;

@media (min-width: 600px) {
background-color: white;
display: flex;
flex-direction: row;
border-radius: 15px;
width: 45%;
height: 10%;
margin-left: 2%;
margin-top: 1%;
text-align: left;
}

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
    flex-wrap: wrap;
    align-items: center;
    padding-right: 0;
    background-color: white;
    margin-left: ${(Props) => Props.marginLeft};
    margin-top: ${(Props) => Props.marginTop};
    text-align: center;
    border: ${(Props) => Props.border};
    border-radius: ${(Props) => Props.borderRadius};
    width: ${(Props) => Props.width};
    border-width: ${(Props) => Props.borderWidth    };
    font-size: 1vw;

    &:hover {
        background-color: ${(Props) => Props.bg};
        color: ${(Props) => Props.hoverColor};
    }

    &:active {
        color: ${(Props) => Props.activeColor};
        transform: translateY(${(Props) => Props.transform});
    }

    @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 0;
    background-color: white;
    margin-left: ${(Props) => Props.marginLeft};
    margin-top: ${(Props) => Props.marginTop};
    text-align: center;
    border: ${(Props) => Props.border};
    border-radius: ${(Props) => Props.borderRadius};
    width: ${(Props) => Props.width};
    border-width: ${(Props) => Props.borderWidth    };
    font-size: 1vw;

    &:hover {
        background-color: ${(Props) => Props.bg};
        color: ${(Props) => Props.hoverColor};
    }

    &:active {
        color: ${(Props) => Props.activeColor};
        transform: translateY(${(Props) => Props.transform});
    }
  }
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
    margin-bottom: 1%;
    margin-top: 0;
}
`

const breatheAnimation = keyframes`
 0% { width: 34%; 0.1}
 20% { width: 34%; opacity: 0.2 }
 30% { width: 36%; opacity: 0.3 }
 40% { width: 38%; opacity: 0.4 }
 50% { width: 40%; opacity: 0.5 }
 60% { width: 42%; opacity: 0.6 }
 70% { width: 45%; opacity: 0.7 }
 80% { width: 47%; opacity: 0.8 }
 90% { width: 49%; opacity: 0.9 }
 100% { width: 50%; opacity: 1 }
`

export const UserPosts = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
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
        border-radius: 10px;
        width: 50%;
        margin-left: 2vw;
        margin-top: 1%;
        margin-bottom: 1%;
        text-align: left;

        animation-name: ${breatheAnimation};
        animation-duration: .1s;
        animation-iteration-count: 1;
    }
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