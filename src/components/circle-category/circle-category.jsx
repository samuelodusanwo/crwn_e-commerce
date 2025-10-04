import './circle-category.styles.scss';


const CircleCategory = ({items}) => {
    const { image, title } = items

    return (
        <div className='circle-category'>
            <div className="circle-text">
                <img src={image} alt={`${title} category`} />
            </div>
            <p>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
        </div>
    )
}

export default CircleCategory;