import React from 'react';
import './Signup.scss'
import {
  Row, Col, Card, Button, Form, Input,
} from 'antd';
import { Link } from "react-router-dom";

function Login() {

  const onFinish = (values) => {
    localStorage.setItem("isAuthenticated", true)
    localStorage.setItem("email", values.email)
    window.open("/", "_self");
  };

  return (
    <section className="login-section">

      <Row justify="center" align="middle" style={{ height: '100%' }}>

        <Col xl={8} lg={8} md={10} sm={12} xs={24}>
          <h1 className='login-title typo-center'>Trello: Manage Team Projects </h1>
          <Card style={{ borderRadius: '20px' }}>
            <Col span={24} className="typo-grey typo-center">
              <h2>Create an account</h2>
            </Col>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Name must be character only.",
                    pattern: new RegExp(/^[a-z A-Z]+$/),
                  },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Input name="email" type="text" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Email is required' },
                  { type: 'email', message: 'Must be in email format' },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Input name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password name="password" />
              </Form.Item>
              <p>Already a user? <Link to={'/sign-in'}>Login</Link></p>
              <Row gutter={[8, 8]} style={{ marginTop: 15 }} justify="end">

                <Col xl={24} lg={24} md={24} sm={24} xs={24} className="typo-right">
                  <Button type="primary" htmlType="submit">
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>

  );
}

export default Login;