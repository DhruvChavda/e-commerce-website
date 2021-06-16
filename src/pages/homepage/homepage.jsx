import React from "react";
import Directory from "../../components/directory/directory";
import { HomepageContainer } from "./homepage-styles";
// import "./homepage.scss"; // styled using styled components

const HomePage = () => {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    );
};

export default HomePage;
