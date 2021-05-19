import React, { Component } from "react";
import "./shop.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA,
        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}
