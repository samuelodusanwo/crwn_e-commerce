import React from "react";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchShopCollection } from "../../Redux/category/category-action";
import { selectCollections } from "../../Redux/category/category-selector";
import CollectionPreview from "../collection-preview/collection-preview";

import './collection-overview.styles.scss';

const CollectionOverView = ({collections, fetchShopCollection}) => {
    useEffect(() => {
        fetchShopCollection();
    }, [fetchShopCollection])

    return (
        <div className="collection-overview">
            {
                collections.map((item) => (
                    <CollectionPreview key={item.id} item={item} />
                ))
            }
        </div>
    )}

const mapDispatchToState = (dispatch) => ({
    fetchShopCollection: () => dispatch(fetchShopCollection())
})

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps, mapDispatchToState)(CollectionOverView);