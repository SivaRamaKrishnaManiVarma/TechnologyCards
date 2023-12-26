import './index.css'

const Card=(props)=>{
    const {cardDetails} = props
    const {title,description,imageURl,className} = props

    return(
        <li  className =`card-item ${className}`>
            <div>
                <h1 className ="heading">{title}</h1>
                <p className ="description">{description}</p>
                <img className = "image" src ={imageURl} alt ={title}/>
        </div>
        </li>
    )
}
export default Card