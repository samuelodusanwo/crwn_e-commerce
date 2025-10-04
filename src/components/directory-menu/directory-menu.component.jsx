import React from "react";
import { useEffect } from "react";
import MenuItem from '../menu-item/menu-item.component'
import './directory-menu.style.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { fetchAllStores } from "../../Redux/shop/shop-action";
import { selectStoreSection } from "../../Redux/shop/shop-selector";


const DirectoryMenu = ({fetchAllStores, stores}) => {
    useEffect(() => {
        fetchAllStores()
    }, [fetchAllStores])
    
    return (
        <div className="directory-menu">
            <h2>All Stores</h2>
            <div className="items">
                {
                    stores.map((item) => (
                        <MenuItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllStores: () => dispatch(fetchAllStores())
})

const mapStateToProps = createStructuredSelector({
    stores: selectStoreSection
})
export default connect(mapStateToProps, mapDispatchToProps)(DirectoryMenu);