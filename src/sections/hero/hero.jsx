import { Link } from 'react-router-dom';
import CircleCategory from '../../components/circle-category/circle-category';
import FoodImage from '../../assets/food-img.png';
import PharmacyImage from '../../assets/pharmacy-beauty.png';
import GroceriesImage from '../../assets/groceries.png';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAllDetailedProduct } from '../../Redux/category/category-action';
import './hero.style.scss'
import { selectCollections } from '../../Redux/category/category-selector';


const HeroSection = ({ collections, fetchAllDetailedProduct }) => {
    const handleClick = async (id) => {
        await fetchAllDetailedProduct(id)
    }

    return (
        <div id="hero" className="hero-section">
            <div className="circle-section">
                {collections.map(item => (
                    <Link 
                        key={item.id} 
                        to={`/shop/${encodeURIComponent(item.title)}/`} 
                        onClick={() => handleClick(item.id)}>
                        <CircleCategory items={item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllDetailedProduct: (id) => dispatch(fetchAllDetailedProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);