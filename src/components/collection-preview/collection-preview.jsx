import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

const CollectionPreview = ({ item }) => {
    return (
        <div key={item.id} className='collection-preview'>
            <h1>{item.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    item.products.filter((_, idx) => idx < 4).map((product) =>(
                        <CollectionItem key={product.id} item={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;