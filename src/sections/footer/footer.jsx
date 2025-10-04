import { Link } from 'react-router-dom';
import crwnImage from '../../assets/crown.svg'
import appStoreImage from '../../assets/download-button-store.svg';
import googleStoreImage from '../../assets/download-button-google.svg';
import './footer.styles.scss';


const Footer = () => {
    const footerLinks = [
        {
            id: 1,
            title: "Let's do it together",
            links: ["Career", "Crwn for Partners", "Couriers", "Crwn Business"]
        },
        {
            id: 2,
            title: "Links of interest",
            links: ["About us", "FAQ", "Crwn Prime", "Blog", "Contact us", "Security", "Login"]
        },
        {
            id: 3,
            title: "Follow us",
            links: ["Instagram", "Tiktok"]
        },
        {
            id: 4,
            img: [appStoreImage, googleStoreImage],
            links: ["CONFIGURE THE COOKIE", "TERMS AND CONDITION", "PRIVACY POLICY", "COOKIES POLICY", "COMPLIANCE", "DIGITAL SERVICES ACT", "EUROPEAN ACCESSIBILITY ACT"]
        },
    ]

    const categories = ["Indian", "Healthy", "Pizza", "Sushi", "Burgers", "Breakfast", "Pastries", "Nigerian"]

    return (
        <footer className="footer-section">
            <div className='logo-flex'>
                <div className='link-img'>
                    <Link to='/'>
                        <img src={crwnImage} alt="logo image" className='logo-img' />
                    </Link>
                </div>
                <div className='footer-flex'>
                    {footerLinks.map(item => (
                        <div key={item.id} className="a-link">
                            <h2>{item.title}</h2>
                            {item.img && (
                                <div className='store-img'>
                                    {item.img.map((src, idx) => (
                                        <img key={idx} src={src} />
                                    ))}
                                </div>
                            )}
                            {item.links.map((link, idx) => (
                                <a key={idx} href="#">{link}</a>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='category-sec'>
                    <h2>Top categories: Nigeria</h2>
                    <div className='footer-link'>
                        {categories.map((item, idx) => (
                            <a key={idx} href="#">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;