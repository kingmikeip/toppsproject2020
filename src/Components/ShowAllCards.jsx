import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Menu, Dropdown, Button } from 'antd';
import ShowCard from './ShowCard'
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
// let APIUrl = 'http://localhost:3000/cards';
const herokuUrl = 'https://cors-anywhere.herokuapp.com/https://p2020-app-api.herokuapp.com/cards';


export default function ShowAllCards() {

    const [cardData, setCardData] = useState([]);
    const [APIUrl, setAPIUrl] = useState(herokuUrl);
    const [sortBy, setSortBy] = useState('cardnum'); // card num or print run
    const [picSize,setPicSize] = useState('400px');

    const style = {
        imgsize: {
            height: "400px",
            width: "400px"
        },
        boxstyle: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        },
        buttondiv: {
            margin: "10px"
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
            if (sortBy === 'printrun') {
                response.data.sort((a, b) => { return b.print_run - a.print_run });
            } else {
                response.data.sort((a, b) => { return a.card_number - b.card_number; });
            }
            setCardData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const showPlayer = (e) => {
        e.preventDefault();
        let playerName = e.target.getAttribute("name");
        setAPIUrl(`${herokuUrl}/player/${playerName}`);
    }

    const showArtist = (e) => {
        e.preventDefault();
        let artistName = e.target.getAttribute("name");
        setAPIUrl(`${herokuUrl}/artist/${artistName}`);
    }

    // const sortByPR = () => {
    //     setSortBy('printrun');
    // }


    useEffect(() => {
        getCards();
    }, [APIUrl, sortBy])

    const onSizeMenuClick = ({key}) => {
        console.log(`${key}`);
        switch (key) {
            case 'small':       setPicSize('200px');
                                break;
            case 'medium:':     setPicSize('400px');
                                break;
            case 'large':       setPicSize('600px');
                                break;
            case 'list':        setPicSize('0px');
                                break;
            default:            setPicSize('400px');
                                break;
        }
    }


    const onMenuClick = ({ key }) => {
        console.log(`${key}`)
        if (key === '1') {
            setSortBy('cardnum')
        } else if (key === '2') {
            setSortBy('printrun')
        } else {
            switch (key) {
                case 'Andrew Thiele':
                case 'Ben Baller':
                case 'Blake Jamieson':
                case 'Don C':
                case 'Efdot':
                case 'Ermsy':
                case 'Fucci':
                case 'Gregory Siff':
                case 'Grotesk':
                case 'JK5':
                case 'Jacob Rochester':
                case 'Joshua Vides':
                case 'Keith Shore':
                case 'King Saladeen':
                case 'Matt Taylor':
                case 'Mister Cartoon':
                case 'Naturel':
                case 'Old Man Alan':
                case 'Sophia Chang':
                case 'Tyson Beck':
                    setAPIUrl(`${herokuUrl}/artist/${key}`);
                    break;
                default:
                    setAPIUrl(`${herokuUrl}/player/${key}`);
                    break;
            }
            console.log(key);
        }
    };

    // const onTitleClick = ({ key }) => {
    //     console.log('Title')
    // }

    const menu = (
        <Menu onClick={onMenuClick}>
            <Menu.Item key="1">Card Number</Menu.Item>
            <Menu.Item key="2">Print Run</Menu.Item>
            <SubMenu title="Artist">
                <Menu.Item key="Andrew Thiele">Andrew Thiele</Menu.Item>
                <Menu.Item key="Ben Baller">Ben Baller</Menu.Item>
                <Menu.Item key="Blake Jamieson">Blake Jamieson</Menu.Item>
                <Menu.Item key="Don C">Don C</Menu.Item>
                <Menu.Item key="Efdot">Efdot</Menu.Item>
                <Menu.Item key="Ermsy">Ermsy</Menu.Item>
                <Menu.Item key="Fucci">Fucci</Menu.Item>
                <Menu.Item key="Gregory Siff">Gregory Siff</Menu.Item>
                <Menu.Item key="Grotesk">Grotesk</Menu.Item>
                <Menu.Item key="JK5">JK5</Menu.Item>
                <Menu.Item key="Jacob Rochester">Jacob Rochester</Menu.Item>
                <Menu.Item key="Joshua Vides">Joshua Vides</Menu.Item>
                <Menu.Item key="Keith Shore">Keith Shore</Menu.Item>
                <Menu.Item key="King Saladeen">King Saladeen</Menu.Item>
                <Menu.Item key="Matt Taylor">Matt Taylor</Menu.Item>
                <Menu.Item key="Mister Cartoon">Mister Cartoon</Menu.Item>
                <Menu.Item key="Naturel">Naturel</Menu.Item>
                <Menu.Item key="Oldmanalan">Oldmanalan</Menu.Item>
                <Menu.Item key="Sophia Chang">Sophia Chang</Menu.Item>
                <Menu.Item key="Tyson Beck">Tyson Beck</Menu.Item>
            </SubMenu>
            <SubMenu title="Player">
                <Menu.Item key="Bob Gibson">Bob Gibson</Menu.Item>
                <Menu.Item key="Cal Ripken Jr">Cal Ripken Jr</Menu.Item>
                <Menu.Item key="Derek Jeter">Derek Jeter</Menu.Item>
                <Menu.Item key="Don Mattingly">Don Mattingly</Menu.Item>
                <Menu.Item key="Dwight Gooden">Dwight Gooden</Menu.Item>
                <Menu.Item key="Frank Thomas">Frank Thomas</Menu.Item>
                <Menu.Item key="George Brett">George Brett</Menu.Item>
                <Menu.Item key="Ichiro">Ichiro</Menu.Item>
                <Menu.Item key="Jackie Robinson">Jackie Robinson</Menu.Item>
                <Menu.Item key="Ken Griffey Jr">Ken Griffey Jr</Menu.Item>
                <Menu.Item key="Mariano Rivera">Mariano Rivera</Menu.Item>
                <Menu.Item key="Mark McGwire">Mark McGwire</Menu.Item>
                <Menu.Item key="Mike Trout">Mike Trout</Menu.Item>
                <Menu.Item key="Nolan Ryan">Nolan Ryan</Menu.Item>
                <Menu.Item key="Rickey Henderson">Rickey Henderson</Menu.Item>
                <Menu.Item key="Roberto Clemente">Roberto Clemente</Menu.Item>
                <Menu.Item key="Sandy Koufax">Sandy Koufax</Menu.Item>
                <Menu.Item key="Ted Williams">Ted Williams</Menu.Item>
                <Menu.Item key="Tony Gwynn">Tony Gwynn</Menu.Item>
                <Menu.Item key="Willie Mays">Willie Mays</Menu.Item>
            </SubMenu>
        </Menu>
    );

    const sizeMenu = (
        <Menu onClick={onSizeMenuClick}>
            <Menu.Item key="small">Small</Menu.Item>
            <Menu.Item key="medium">Medium</Menu.Item>
            <Menu.Item key="large">Large</Menu.Item>
            <Menu.Item key="list">List</Menu.Item>
        </Menu>
    )

    return (
        <>
            <div style={style.buttondiv}>
                <Button onClick={() => { setAPIUrl(herokuUrl) }}>
                    Show All Cards

                </Button>
                <Button>
                    Show My Cards
                </Button>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Button>
                            Sort By
                        </Button>
                    </a>
                </Dropdown>
                <Dropdown overlay={sizeMenu}>
                    <a onClick={e => e.preventDefault()}>
                        <Button>
                            Pic Size
                        </Button>
                    </a>
                </Dropdown>

            </div>



            <div style={style.boxstyle}>
                {cardData.map(card => {
                    return (
                        <>
                            <ShowCard card={card} showPlayer={showPlayer} showArtist={showArtist} picSize={picSize}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}