import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });
// this can also be used instead of createStructuredSelector
// const mapStateToProps = (state) => state.directory;

export default connect(mapStateToProps)(Directory);
