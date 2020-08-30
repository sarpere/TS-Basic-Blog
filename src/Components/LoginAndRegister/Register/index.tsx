
import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../../store/user/actions'
import { ApplicationState } from '../../../store'
// import { User } from '../../../store/user/types'
import { State, Props } from '../index'
import { validateInput } from '../Login'
import ErrorMeesage from '../../ErrorMeesage'
class Register extends Component<Props, State> {
    state = {
        validation: false
    }
    private FormRef = React.createRef<HTMLDivElement>()

    submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        var validate = validateInput(this.FormRef);
        if(validate){
            this.setState({
                validation: true
            })
            return 
        }
    }
    render() {
        const { show } = this.props
        return (
            <div className={`${!show && "leftToRight"}`} ref={this.FormRef}>
                <Form onSubmit={this.submit.bind(this)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" placeholder="Kullanıcı Adı" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="password" placeholder="Şifre" />
                    </Form.Group>
                    {
                        this.state.validation && 
                        <ErrorMeesage text="Tüm alanları doldurunuz!" />
                    }
                    <Button variant="primary" type="submit">
                        Kaydol
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    posts: state.post.data
})
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(userActions, dispatch)

// redux bağlantısı eksik... -----
export default connect(mapStateToProps, mapDispatchToProps)(Register);