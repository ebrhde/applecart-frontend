import styles from "../../styles/ProductSlider.module.scss";
import {Card} from "react-bootstrap";
import {FC} from "react";

type productSliderProps = {
    handleThumbClick: (photo: string) => void,
    handlePrevArrowClick: () => void,
    handleNextArrowClick: () => void,
    photos: string[],
    productTitle: string,
    slideStyle: { transform: string }
}

const ProductSlider:FC<productSliderProps>  = (
    {
        handleNextArrowClick,
        handlePrevArrowClick,
        handleThumbClick, photos,
        productTitle,
        slideStyle
    }:productSliderProps
) => {
    return <div className={styles.thumbnails}>
        {photos.length > 3 && <div className={styles.prev_arrow} onClick={handlePrevArrowClick}></div>}
        {photos.map((photo, photoIndex) => {
            return <Card style={slideStyle} className={styles.thumb + ' slide'} onClick={() => handleThumbClick(photo)}>
                <img src={photo} alt={`${productTitle}-image-${photoIndex}`} />
            </Card>
        })}
        {photos.length > 3 && <div className={styles.next_arrow} onClick={handleNextArrowClick}></div>}
    </div>
}

export default ProductSlider;