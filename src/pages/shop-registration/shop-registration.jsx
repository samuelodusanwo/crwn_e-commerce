import { useState } from 'react';
import './shop-registration.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button.component';
import { createShopFunction } from '../../Redux/shop/shop-action';

const ShopRegistration = ({createShopFunction}) => {
    const [formData, setFormData] = useState({
        shopName: "",
        shopPhoneNumber: "",
        shopLogo: null
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

        createShopFunction(formData)
        setFormData({
            shopName: "",
            shopPhoneNumber: "",
            shopLogo: null
        })
    }

    return (
        <div className="shop-registration">
            <h1>Be a Partner</h1>
            <div>
                <h2>Shop Details</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="shopName">Shop Name</label>
                        <input 
                            type="text" 
                            id="shopName"
                            name="shopName"
                            onChange={handleChange}
                            value={formData.shopName}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="shopLogo">Shop Logo</label>
                        <input 
                            type="file" 
                            id="shopLogo"
                            name="shopLogo"
                            accept='image/*'
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="shopPhoneNumber">Shop Phone Number</label>
                        <input 
                            type="tel"
                            id="shopPhoneNumber" 
                            name="shopPhoneNumber"
                            onChange={handleChange}
                            value={formData.shopPhoneNumber}
                            required 
                        />
                    </div>
                    <CustomButton type="submit" registerBtn>Register Shop</CustomButton>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = ((dispatch) => ({
    createShopFunction: (data) => dispatch(createShopFunction(data))
}))

export default connect(null, mapDispatchToProps)(ShopRegistration);