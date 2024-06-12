import './ImageList.css'
import ImageShow from "./ImageShow";
function ImageList({images})
{
    const renderImage=images.map((images)=>{
        return <ImageShow key={images.id} image={images}/>
    });
    
    return <div className="image-list">{renderImage}</div>
};
export default ImageList;