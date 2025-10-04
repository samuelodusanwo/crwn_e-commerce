import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cityImage from '/src/assets/cities.svg';
import { connect } from 'react-redux';
import { selectCollections } from '../../Redux/category/category-selector';
import './feature.style.scss';
import { createStructuredSelector } from 'reselect';
import { fetchAllDetailedProduct, fetchShopCollection } from '../../Redux/category/category-action';


const FeatureSection = ({collections, fetchShopCollection, fetchAllDetailedProduct}) => {
    useEffect(() => {
        fetchShopCollection()
    }, [fetchShopCollection])

    const handleClick = async (id) => {
        await fetchAllDetailedProduct(id)
    }

    return (
        <div className="feature-section">
            <img src={cityImage} alt="city image" />
            <h1 className='cat-heading'>Top Categories in Nigeria</h1>
            <div className='category'>
                {collections.map(item => {
                    return (
                        <Link
                            key={item.id} 
                            to={`/shop/${encodeURIComponent(item.title)}`}
                            className='list-style'
                            onClick={() => handleClick(item.id)}
                        >
                            {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

const mapDispatchToProps = (dispatch) => ({
    fetchShopCollection: () => dispatch(fetchShopCollection()),
    fetchAllDetailedProduct: (id) => dispatch(fetchAllDetailedProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeatureSection);