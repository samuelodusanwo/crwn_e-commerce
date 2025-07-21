import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

const CollectionPreview = ({ id, title, items }) => (
    <div key={id} className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((_, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;