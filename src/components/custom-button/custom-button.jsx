import React from "react";
// import { CustomButtonContainer } from "./custom-button-styles";
import "./custom-button.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherButtonProps }) => {
    return (
        <button
            className={`${inverted ? "inverted" : ""} ${
                isGoogleSignIn ? "google-sign-in" : ""
            } custom-button`}
            {...otherButtonProps}>
            {children}
        </button>
    );
};

export default CustomButton;
