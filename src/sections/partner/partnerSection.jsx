import { useNavigate } from 'react-router-dom';
import togetherImage from '../../assets/together-opt.svg';
import riderImage from '../../assets/rider-image-opt.png';
import partnerImage from '../../assets/partners-image-opt.png';
import careersImage from '../../assets/careers-image-opt.png';
import './partnerSection.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';


const PartnerSection = () => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        if (link) {
            navigate(link)
        }
    }

    const partnerItems = [
        {
            id: 1,
            image: riderImage, 
            alt: "Rider Image",
            heading: "Become a rider", 
            detials: "Enjoy flexibility, freedom and competitive earnings by delivering through Crwn.",
            button: "Register"
        },
        {
            id: 2,
            image: partnerImage,
            alt: "Partner Image", 
            heading: "Become a Partner", 
            detials: "Grow with Crwn! Our technology and user base can help you boost sales and unlock new opportunities!",
            button: "Register",
            linkTo: "/register-shop"
        },
        {
            id: 3,
            image: careersImage, 
            alt: "Career Image",
            heading: "Become a careers", 
            detials: "Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!",
            button: "Register"
        }
    ]

    return (
        <div className="partner-section">
            <img src={togetherImage} alt="city image" />
            <h1 className='cat-heading'>Top Categories in Nigeria</h1>
            <div className="partner-flex">
                {partnerItems.map(item => (
                    <div key={item.id} className='reg-section'>
                        <img src={item.image} alt={item.alt} />
                        <h1>{item.heading}</h1>
                        <p>{item.detials}</p>
                        <CustomButton partnerButton onClick={() => handleClick(item.linkTo)}>{item.button}</CustomButton>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartnerSection;