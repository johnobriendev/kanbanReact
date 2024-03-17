import Dropline from "./Dropline";
import "./styles/Card.css"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";




function Card({title, id, list,}){
    return(
        <>
            <Dropline beforeId={id} list={list}/>
            <div className="card-container">
                <div draggable="true" className="card">
                    <p>{title}</p>
                </div>
                <button className="delete-card-btn">
                    <IconContext.Provider value={{ className: "delete-btn" }}>
                    <RiDeleteBin5Line />
                    </IconContext.Provider>
                </button>
                
            </div>
        
        
        </>
        
    )
}

export default Card;