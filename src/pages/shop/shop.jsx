import React, { Component } from "react";

import "./shop.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import { Route } from "react-router";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop-actions";

export class Shop extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;


        const collectionRef = firestore.collection("collections");
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
