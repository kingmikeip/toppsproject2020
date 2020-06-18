import React, {useState} from 'react';
import axios from 'axios';

export default function ShowCard(props) {
    const [mousePointer,setMousePointer] = useState('default');

    const style = {
        imgstyle: {
            height: props.picSize,
            width: props.picSize
        },
        boxstyle: {
            border: "1px solid pink",
            width: "100%"
        },
        boxstyletext:{
            border: "1px solid grey",
            width: "50%"
        },
        flexrow: {
            display: "flex",
            flexDirection: "row"
        },
        textstyle: {
            margin: "3px"
        },
        containerstyle: {
            margin: "2px"
        },
        pointer: {
            cursor: mousePointer
        }
    }

    const overPointer = (e) => {
        e.preventDefault();
        setMousePointer('pointer');
    }

    const outPointer = (e) => {
        setMousePointer('default');
    }

    return (
        <div style={style.containerstyle}>
            <>
                <div style={{...style.boxstyle, textAlign: "center"}}>
                    <img src={props.card.photo_url} style={style.imgstyle} />
                </div>
                <div style={{...style.boxstyle, ...style.flexrow}}>
                    <div style={style.boxstyletext}>
                        <p style={style.textstyle}>Card Number: {props.card.card_number}</p>
                        <p style={style.textstyle}>Print Run: {props.card.print_run || "Not Released"}</p>
                    </div>
                    <div style={style.boxstyletext}>
                        <p style={{...style.textstyle, ...style.pointer}} name={props.card.player} onClick={props.showPlayer} onMouseOver={overPointer} onMouseOut={outPointer}>Player: {props.card.player}</p>
                        <p style={{...style.textstyle, ...style.pointer}} name={props.card.artist} onClick={props.showArtist} onMouseOver={overPointer} onMouseOut={outPointer}>Artist: {props.card.artist}</p>
                    </div>
                </div>
            </>
        </div>
    )
}