import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';


/* 

// Axios call to show all info

Show -> All Cards
     -> My Cards
     -> Player (single or multiple)
     -> Artist (single or multiple)
Sort By -> Print Run
	-> Print Run Range
        -> Card Number
	-> Card Number Range
	-> Artist (Alphabetically)
	-> Player (Alphabetically)
Wishlist
Add Card
Remove Card
Edit Details
 */

const onMenuClick = ({ key }) => {
    console.log(`${key}`)
};

const menu = (
    <Menu onClick={onMenuClick}>
        <Menu.Item key="1">Card Number</Menu.Item>
        <Menu.Item key="2">Artist</Menu.Item>
        <Menu.Item key="3">Player</Menu.Item>
        <Menu.Item key="4">Print Run</Menu.Item>
    </Menu>
);


export default function DisplayPage() {
    return (
        <div>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Button>
                        Sort By
                    </Button>
                </a>
            </Dropdown>
        </div>
    )
}