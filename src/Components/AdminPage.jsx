import React, {useState} from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';

const apiUrl = 'http://localhost:3000/cards/';
const herokuUrl = 'https://cors-anywhere.herokuapp.com/https://p2020-app-api.herokuapp.com/cards';
const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const style = {
    success: {
        color: "red"
    }
}



export default function AdminPage() {

    const [form] = Form.useForm();
    const [success,setSuccess] = useState(false);

    const onFinish = values => {
        console.log(values.player);
        // cardnum, player, artist, printrun, photolink
        createCard(values);
        // form.resetFields();
    };

    const onReset = () => {
        form.resetFields();
    };

    const createCard = async (values) => {
        try {
            console.log(values);
            let response = await axios({
                url: `${herokuUrl}`,
                method: 'post',
                data: {
                    card_number: values.cardnum,
                    player: values.player,
                    artist: values.artist,
                    print_run: values.printrun,
                    photo_url: values.photolink,
                    user_id: 1
                },
                header: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            setSuccess(true);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const closeAlert = () =>{
        form.resetFields();
        setSuccess(false);
    }


    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} size="middle">

                <Form.Item
                    name="cardnum"
                    label="Card Number"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="player"
                    label="Player"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="artist"
                    label="Artist"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="printrun"
                    label="Print Run"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="photolink"
                    label="Photo Link"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
            <p style={style.success} onClick={closeAlert}>{success && `Card Submitted Successfully`}</p>
        </div>
    )
}