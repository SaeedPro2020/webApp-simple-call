import React, { useState } from "react";
import { Container, UserCard } from "./styles/UserProfile.styled";
import imageProfile from '../assets/blank.png';
import { BtnConfirm, UserPosts } from "./styles/UserComp.styled";
import closeBtn from '../assets/gen034.svg';
import { useUpdate_UsersMutation, useUsersQuery } from "../api/graphql-frontend";
import { CloseBtn } from "./styles/ShowStyle.styled";

type propsParm = {
    name: string | null | undefined;
    id: string;
};

export default function UserComp(props: propsParm): JSX.Element {
    // console.log(props.payloads)
    const [btnEditName, setBtnEditName] = useState(false)
    const [newName, setNewName] = useState("")
    const [updateUsersMutation, { data, loading, error }] = useUpdate_UsersMutation()
    const { refetch } = useUsersQuery();

    const EditName = () => {
        // console.log(`We are going to edit the user name ${props.name} here`)
        setBtnEditName(true)
    }

    const updateData = async () => {
        // console.log('We perform a mutation to send the data and update UI')
        await updateUsersMutation({ variables: {where:{
            "id": {
              "_eq": `${props.id}`
            },
          }, 
          set:{
            "name": `${newName}`
          },
        }})
        refetch()
        setBtnEditName(false)
    }

    return(
        <Container>
            <UserCard data-testid="ListOfUsers" marginLeft='25%' marginTop='20%' border='solid' borderRadius='4px' width='12%' bg='#8f99f6'
                hoverColor='white' activeColor='white' transform='2px' borderWidth='1px'>
                <img src={imageProfile}></img>
                <div>
                    <h3 data-testid="UserName">User Name: {props.name}</h3>
                    <button data-testid="btnEditName" onClick={EditName}>Edit</button>
                </div>
            </UserCard>
            
            {btnEditName ? 
                <UserPosts data-testid="formEditName">
                    <CloseBtn data-testid="btnClose3" onClick={() => setBtnEditName(false)}>
                        <img src={closeBtn}></img>
                    </CloseBtn>

                    <div>
                        <p>Edit username:</p>
                        <input 
                            data-testid="nameInput"
                            type="text" 
                            id="Name"
                            value={newName}
                            onChange={e => setNewName(e.target.value)}/>
                    </div>

                    <BtnConfirm onClick={updateData}><span>Confirm</span></BtnConfirm >

                </UserPosts>
            :
            <></>
            }
             
        </Container>
    )
}