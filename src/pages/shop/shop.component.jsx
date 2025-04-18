import React from 'react'
import { ShopData } from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview'

import './shop.styles.scss'


class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: ShopData
        }
    }

    render(){
        const { collections } = this.state;

        return (
            <div>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;