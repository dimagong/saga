import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPost } from '../Redux/action'
import { showAlert } from '../Redux/action'
import AlertWiev from './Alert'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    submitHandler = (event) => {
        event.preventDefault()

        const { title } = this.state;

        if (!title.trim()) return this.props.showAlert('You need to enter the name of posts');

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState((prevState, props) => ({
            title: ''
        })
        )

    }

    changeText = (event) => {
        event.persist()
        this.setState((prevState, props) => ({
            ...prevState, ...{ [event.target.name]: event.target.value }
        }))

    }
    render() {
        console.log('this.state', this.state.title)
        return (
            <Form onSubmit={this.submitHandler}>
                {
                    this.props.alert && <AlertWiev text={this.props.alert} />
                }
                <Form.Group >
                    <Form.Label>Title post</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Post"
                        id="title"
                        onChange={this.changeText}
                        name='title'
                        value={this.state.title}
                    />
                    <Button type="submit" variant="danger" size="lg" className="mt-2">Create</Button>
                </Form.Group>
            </Form>


        );
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert

}

const mapStateToProps = (state) => {
    return {
        alert: state.app.alert,
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);