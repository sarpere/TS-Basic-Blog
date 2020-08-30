import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../../store/user/actions'
import { ApplicationState } from '../../../store'
import { User } from '../../../store/user/types'
import { State, Props } from '../index'
import ErrorMessage from '../../ErrorMeesage'
import { LoginRequest } from '../../../mockApi/User'
interface DispatchProps {
    userPending(): void,
    userSuccess(): void,
    userError(): void,
}
type LoginProps = State & DispatchProps & Props
class Login extends Component<LoginProps> {
    state = {
        validation: false,
        succesMessage: {
            type: 0,
            Message: ""
        }
    }
    private FormRef = React.createRef<HTMLDivElement>()

    submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        validateInput(this.FormRef);
        var validate = validateInput(this.FormRef);
        if (validate) {
            this.setState({
                succesMessage: {
                    type: 2,
                    Message: "Tüm alanları doldurunuz!"
                }
            })
            return
        } else {
            var a = 0
            this.setState({
                succesMessage: {
                    type: 0,
                    Message: ""
                }
            })
            this.props.userPending()
            LoginRequest(getValues(this.FormRef)).then(res => {
                this.setState({
                    succesMessage: {
                        type: 1,
                        Message: "Giriş Başarılı."
                    }
                })
                this.props.userSuccess()
                this.props.handleClose();
            }).catch((err) => {
                this.props.userError()
                this.setState({
                    succesMessage: {
                        type: 2,
                        Message: err
                    }
                })
            })
        }
    }
    render() {
        const { show } = this.props
        return (
            <div className={`${!show && "rightToLeft"}`} ref={this.FormRef}>
                <Form onSubmit={this.submit.bind(this)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" name="Name" placeholder="Kullanıcı Adı" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="password" name="Password" placeholder="Password" />
                    </Form.Group>
                      {
                        this.state.succesMessage.type === 1 &&
                        <p> {this.state.succesMessage.Message} </p>
                    }
                    {
                        this.state.succesMessage.type === 2 &&
                        <ErrorMessage text={this.state.succesMessage.Message} />
                    }
                    <Button variant="primary" type="submit">
                        Giriş
                    </Button>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = (state: ApplicationState) => ({
})
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(userActions, dispatch)

// redux bağlantısı eksik... -----
export default connect(mapStateToProps, mapDispatchToProps)(Login);

export function validateInput(ref: React.RefObject<HTMLDivElement>) {
    var hasInvalid = false
    if (ref.current) {
        const Inputs = ref.current.getElementsByTagName('input');
        for (var z = 0; z < Inputs.length; z++) {
            if (Inputs[z].value.length === 0) {
                Inputs[z].classList.add('invalid')
                hasInvalid = true
            } else {
                Inputs[z].classList.remove('invalid')
            }
        }
    }
    return hasInvalid
}
export function getValues(ref: React.RefObject<HTMLDivElement>) {
    var data: any = {}
    if (ref.current) {
        const Inputs = ref.current.getElementsByTagName('input');
        for (var z = 0; z < Inputs.length; z++) {
            data[Inputs[z].name] = Inputs[z].value
        }
    }
    return data
}

