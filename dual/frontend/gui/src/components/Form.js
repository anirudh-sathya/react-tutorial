import React from 'react';

import {Form, Input, Button,} from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
  
class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: this.props.token
        }    
        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
            default:
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
        }
    }

    render() {
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID )}>
            <Form.Item label="Title">
                <Input name="title" placeholder="Put a title here" />
            </Form.Item>
            <Form.Item label="Content">
                <Input name="content" placeholder="Enter some content" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    }
}

  export default connect(mapStateToProps)(CustomForm);