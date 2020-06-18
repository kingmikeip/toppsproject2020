import React from 'react'

export default function Splash () {
    const style = {
        headerstyle: {
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold"
        },
        maincontainer: {
            padding: "2%",
            margin: "2%"
        }
    }
    return(
        <div style={style.maincontainer}>
            <h1 style={style.headerstyle}>Topps Project 2020 Tracker</h1>
        </div>
    )
}