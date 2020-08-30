import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import './style.scss';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../store/user/actions'
import { ApplicationState } from '../../store'
import { User } from '../../store/user/types'
import LoginAndRegister from '../LoginAndRegister'
interface Props {
}
interface DispatchProps {
    userLogout: () => void
}
interface State {
    // loggedIn: boolean
}
type LoginProps = State & DispatchProps & Props
class Header extends React.Component<LoginProps> {
    state = {
        show: false
    }
    public render() {
        const { show } = this.state
        return (
            <>
                <Nav
                    activeKey="/"
                    onSelect={(selectedKey: any) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Link className="nav-link" to="/">Logo</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <div className="TypesDD">
                            <p className="nav-link DD">Types</p>
                            <div className="Items">
                                <TypesItemContainer link={"link1"} text={"link1"} />
                                <TypesItemContainer link={"link2"} text={"link2"} />
                                <TypesItemContainer link={"link3"} text={"link3"} />
                                <TypesItemContainer link={"link4"} text={"link4"} />
                            </div>
                        </div>

                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/Post">Link</Link>
                    </Nav.Item>
                    {/* {
                        this.props.loggedIn ?
                            <Nav.Item>
                                <div onClick={() => { this.props.userLogout() }} className="nav-link">Çıkış</div>
                            </Nav.Item>
                            : */}
                            <Nav.Item>
                                <div onClick={() => { if (!show) this.setState({ show: true }) }} className="nav-link">Giriş Yap</div>
                            </Nav.Item>
                    {/* } */}
                </Nav>
                <LoginAndRegister show={show} handleClose={() => this.setState({ show: false })} />
            </>
        );
    }
}

interface TypesItemContainerProps {
    link: string,
    text: string
}


const TypesItemContainer: React.FC<TypesItemContainerProps> = ({ link, text }) => {
    return <Link className="Item nav-link" to={link} >{text}</Link>
}
const mapStateToProps = (state: ApplicationState) => ({
    // loggedIn: state.user.loggedIn
})
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(userActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);