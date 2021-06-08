import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

import "./collection.scss";

const Collection = ({ collection }) => {
    console.log("collection", collection);
    return (
        <div className='collection-page'>
            <h2>CATEGORY PAGE</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.collectionId);
    return { collection: selectCollection(ownProps.match.params.collectionId)(state) };
};

export default connect(mapStateToProps)(Collection);
