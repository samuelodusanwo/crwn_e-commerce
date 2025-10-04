import { useState, useEffect } from 'react';
import './post-registration.style.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { connect } from 'react-redux';
import { createProduct } from '../../Redux/category/category-action';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../Redux/category/category-selector';
import { selectUserShop } from '../../Redux/shop/shop-selector';
import { fetchUserShop } from '../../Redux/shop/shop-action';


const PostRegistration = ({ fetchUserShop, categories, userShop, createProduct }) => {
    useEffect(() => {
        fetchUserShop()
    }, [fetchUserShop])

    const [formData, setFormData] = useState({
        name: "",
        image: null,
        category: "",
        description: "",
        price: "",
        shop: ""
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            ...formData,
            category: Number(formData.category),
            shop: Number(formData.shop)
        }
        
        createProduct(payload)
        setFormData({
            name: "",
            image: null,
            category: "",
            description: "",
            price: "",
            shop: "",
        })
    }

    return (
        <div className="product-registration">
            <h1>Post a Product</h1>
            <div>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Product Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Product Image</label>
                        <input 
                            type="file" 
                            id="image"
                            name="image"
                            onChange={handleChange}
                            accept="image/*" 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="shop">Shop name</label>
                        <select 
                            name="shop" 
                            id="shop" 
                            onChange={handleChange}
                            value={formData.shop}
                            required
                        >
                            <option value="">-- Select a shop --</option>
                            {userShop.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category">Post Category</label>
                        <select 
                            name="category" 
                            id="category" 
                            onChange={handleChange}
                            value={formData.category}
                            required
                        >
                            <option value="">-- Select a category --</option>
                            {categories.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Product Description</label>
                        <textarea 
                            id='description'
                            name='description'
                            onChange={handleChange}
                            value={formData.description}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Product Price</label>
                        <input 
                            type="text" 
                            id="price" 
                            name="price"
                            onChange={handleChange}
                            value={formData.price}
                            required 
                        />
                    </div>
                    <CustomButton type="submit" registerBtn>Publish</CustomButton>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    categories: selectCollections,
    userShop: selectUserShop
})

const mapDispatchToProps = (dispatch) => ({
    createProduct: (data) => dispatch(createProduct(data)),
    fetchUserShop: ()  => dispatch(fetchUserShop())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostRegistration);