import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { User } from '../../store/user/types'
import { bindActionCreators,Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../store/user/actions'
import { ApplicationState } from '../../store'
import Login from './Login'
import Register from './Register'
import './style.scss'
export interface Message {
    type: number
    message: string
}
//type 0 => no action
//type 1 => success
//type 2 => error
export interface Props {
    show: boolean,
    handleClose: () => void
}
export interface State {
    LoginSwitch?: boolean
    validation?: boolean
    succesMessage?: Message
}

export default class LoginAndRegister extends Component<Props, State> {
    state = {
        LoginSwitch: true
    }
    render() {
        return (
            <Modal className="LoginModal" show={this.props.show} onHide={this.props.handleClose.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            this.state.LoginSwitch ? "Giriş" : "Kaydol"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Content">
                        <Login handleClose={this.props.handleClose} show={this.state.LoginSwitch} />
                        <Register handleClose={this.props.handleClose}  show={!this.state.LoginSwitch} />
                    </div>
                    <div className="LoginSwitch">
                        <p onClick={() => this.setState({ LoginSwitch: true })}>Giriş</p>
                        <p onClick={() => this.setState({ LoginSwitch: false })}>Kaydol</p>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}
