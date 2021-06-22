import React, { Component } from "react";

import "./shop.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import { Route } from "react-router";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop-actions";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export class Shop extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
        };
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection("collections");
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner {...props} isLoading={loading} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionWithSpinner {...props} isLoading={loading} />}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
