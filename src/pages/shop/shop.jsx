import React from "react";

import "./shop.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import { Route } from "react-router";

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route path={`/shop/:collectionId`} component={Collection} />
    </div>
);

export default Shop;
