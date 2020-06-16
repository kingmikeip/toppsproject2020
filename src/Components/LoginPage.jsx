import React from 'react'
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

export default function LoginPage() {
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 8,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 16,
        },
    };

    const style = {
        maincontainer: {
            margin: "15px"
        }
    }

    const onFinish = values => {
        // login
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={style.maincontainer}>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    );

}