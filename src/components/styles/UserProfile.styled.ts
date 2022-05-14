import styled from "styled-components";

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

}

export const Container = styled.div`
display: flex;
width: 100%;
display: flex;
flex-direction: column;
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
    align-items: center;
    padding-right: 0;
    background-color: white;
    margin-left: ${(Props) => Props.marginLeft};
    margin-top: ${(Props) => Props.marginTop};
    text-align: center;
    border: ${(Props) => Props.border};
    border-radius: ${(Props) => Props.borderRadius};
    width: ${(Props) => Props.width};
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
`;