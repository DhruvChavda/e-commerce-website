import React from "react";
import { CustomButtonContainer } from "./custom-button-styles";
// import "./custom-button.scss";

const CustomButton = ({ children, ...otherButtonProps }) => {
    return <CustomButtonContainer {...otherButtonProps}>{children}</CustomButtonContainer>;
};

export default CustomButton;
