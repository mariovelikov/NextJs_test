import { ImageBox } from "./elements"
import image from '../../resources/video.png'


export const Image = () => {
    return (
        <ImageBox>
            <img src={image} alt="video" />
        </ImageBox>
    )
}