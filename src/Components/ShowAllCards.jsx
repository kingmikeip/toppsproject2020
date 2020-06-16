import React, {useEffect,useState} from 'react'
import axios from 'axios'
import ShowCard from './ShowCard'
// let APIUrl = 'http://localhost:3000/cards';

export default function ShowAllCards(){

    const [cardData,setCardData] = useState([]);
    const [APIUrl, setAPIUrl] = useState('http://localhost:3000/cards');
    const [sortBy, setSortBy] = useState('cardnum'); // card num or print run

    const style = {
        imgsize: {
            height: "400px",
            width: "400px"
        },
        boxstyle: {
            display: "flex",
            flexWrap: "wrap"
        }
    }

const getCards = async () => {
    try {
        let response = await axios({
            url: APIUrl,
            method: 'GET'
        })
        console.log(response);
        // default sorts by card number
        if (sortBy === 'printrun'){
            response.data.sort((a,b)=>{return b.print_run - a.print_run});
        } else {
            response.data.sort((a,b)=>{return a.card_number - b.card_number;});
        }
        setCardData(response.data);
    } catch (error) {
        console.log(error);
    }
}

const showPlayer = (e) => {
    e.preventDefault();
    let playerName = e.target.getAttribute("name");
    setAPIUrl(`http://localhost:3000/cards/player/${playerName}`);
}

const showArtist = (e) => {
    e.preventDefault();
    let artistName = e.target.getAttribute("name");
    setAPIUrl(`http://localhost:3000/cards/artist/${artistName}`);
}

const sortByPR = () => {
    setSortBy('printrun');
}


useEffect(()=>{
    getCards();
},[APIUrl,sortBy])

    return(
        <>
        <h1 onClick={()=>{setAPIUrl('http://localhost:3000/cards')}}>Show All Cards</h1>
        <h1 onClick={(e)=>{sortByPR(e)}}>Sort by Print Run</h1>
        <div style={style.boxstyle}>
            {cardData.map(card=>{
                return (
                    <>
                    <ShowCard card={card} showPlayer={showPlayer} showArtist={showArtist}/>
                    </>
                )
            })}
        </div>
        </>
    )
}