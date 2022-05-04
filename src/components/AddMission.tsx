import React, { useState } from "react";

export default function AddMission(): JSX.Element {

    const [name, setName] = useState("")
    const [website, setWebsite] = useState("")
    const [manufacturers, setManufacturers] = useState("")
    const [orbit, setOrbit] = useState("")
    const [nationality, setNationality] = useState("")
    const [manufacturer, setManufacturer] = useState("")

    const submitNewMission = async () => {
        console.log("do nothing");
    }

    return(
        
        <div style={{marginTop: 50, display: 'flex', flexDirection:'column', alignItems:'center'}}>
            
            <button style={{marginLeft: 100, marginBottom:20, width:150}} onClick={submitNewMission}>Add Missions</button>

                <input 
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}/>

                <input 
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Website"
                placeholder="Website"
                value={website}
                onChange={e => setWebsite(e.target.value)}/>

                <input 
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Manufacturers"
                placeholder="Manufacturers"
                value={manufacturers}
                onChange={e => setManufacturers(e.target.value)}/>

                <input 
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Orbit"
                placeholder="Orbit"
                value={orbit}
                onChange={e => setOrbit(e.target.value)}/>

                <input 
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Nationality"
                placeholder="Nationality"
                value={nationality}
                onChange={e => setNationality(e.target.value)}/>

                <input 
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Manufacturer"
                placeholder="Manufacturer"
                value={manufacturer}
                onChange={e => setManufacturer(e.target.value)}/>

        </div>
    )}