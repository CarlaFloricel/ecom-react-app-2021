import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/images/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import state from '../../redux/user/user.reducer'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-icon/cart-icon.component'

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick = {() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header)