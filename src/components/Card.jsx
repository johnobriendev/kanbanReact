import Dropline from "./Dropline";
import "./styles/Card.css"


function Card({title, id, list}){
    return(
        <>
            <Dropline beforeId={id} list={list}/>
            <div draggable="true" className="card">
                <p>{title}</p>
            </div>
        
        
        </>
        
    )
}

export default Card;