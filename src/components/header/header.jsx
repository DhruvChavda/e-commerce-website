import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/' title='Home'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN/ UP
                    </Link>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});
// can destructure state to {user} if needed

export default connect(mapStateToProps)(Header);
