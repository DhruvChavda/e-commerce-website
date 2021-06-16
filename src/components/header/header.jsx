import React from "react";
// import "./header.scss"; // styled using styled components
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDD from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv,
} from "./header-styles";

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer className='logo-container' to='/' title='Home'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/'>HOME</OptionLink>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/checkout'>CHECKOUT</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {/* Since OptionLink and OptionDiv have same styles we can use
                OptionLink for div component with the use of `as` prop 
                => <OptionLink as='div ...rest></OptionLink>
                and vice versa as
                => <OptionDiv as={Link} ...rest></OptionDiv> */}
                {currentUser ? (
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                ) : (
                    <OptionLink to='/signin'>SIGN IN/ UP</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDD />}
        </HeaderContainer>
    );
};

// createStructuredSelector doesnt require to pass state
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
