function profileCard({title,handler,image}){
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="images"/>
                </figure>
                 
            </div>
             <div className="card-content">
                <p>{title}</p>
                <p>{handler}</p>    
            </div>               
        </div>
    );
}
export default profileCard;