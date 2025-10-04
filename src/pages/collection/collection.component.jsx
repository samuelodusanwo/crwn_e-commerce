import React from "react";
import { useParams } from "react-router-dom";
import './collection.styles.scss'
import { categoryByProduct } from "../../Redux/category/category-selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";
import { selectCollectionSection } from "../../Redux/shop/shop-selector";

const CollectionPage = ({categoryByProduct}) => {
    const { name } = useParams();
    return (
        <div className="collection-page">
            <h2 className="title">{name.toUpperCase()}</h2>
            <div className="items">
                {categoryByProduct.length === 0 ? (
                    <h3 className="no-product">No Product in this store </h3>
                ) : (
                    categoryByProduct.map(item => (
                        <CollectionItemComponent key={item.id} item={item} />
                    ))
                )}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    categoryByProduct: categoryByProduct,
    collections: selectCollectionSection
})

export default connect(mapStateToProps)(CollectionPage);