import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

const CollectionPreview = ({ id, title, items }) => (
    <div key={id} className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;