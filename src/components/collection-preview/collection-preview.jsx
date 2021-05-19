import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, ind) => ind < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;