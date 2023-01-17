import styles from "../../styles/ProductSliderMobile.module.scss";
import {Card} from "react-bootstrap";
import {FC} from "react";

type productSliderMobileProps = {
    handleThumbClick: (photo: string) => void,
    handlePrevArrowClick: () => void,
    handleNextArrowClick: () => void,
    photos: string[],
    productTitle: string,
    slideStyle: { transform: string }
}

const ProductSliderMobile:FC<productSliderMobileProps>  = (
    {
        handleNextArrowClick,
        handlePrevArrowClick,
        handleThumbClick, photos,
        productTitle,
        slideStyle
    }:productSliderMobileProps
) => {
    return <div className={styles.thumbnails}>
        {photos.length > 3 && <div className={styles.prev_arrow} onClick={handlePrevArrowClick}></div>}
        {photos.map((photo, photoIndex) => {
            return <Card style={slideStyle} className={styles.thumb + ' slide_mobile'} onClick={() => handleThumbClick(photo)}>
                <img src={photo} alt={`${productTitle}-image-${photoIndex}`} />
            </Card>
        })}
        {photos.length > 3 && <div className={styles.next_arrow} onClick={handleNextArrowClick}></div>}
    </div>
}

export default ProductSliderMobile;