import Dropline from "./Dropline";
import "./styles/Card.css"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";




function Card({title, id, list, handleDeleteCard}){
    
    const handleClickDelete = () => handleDeleteCard(id);
    
    return(
        <>
            <Dropline beforeId={id} list={list}/>
            <div className="card-container">
                <div draggable="true" className="card">
                    <p>{title}</p>
                </div>
    
                    <IconContext.Provider value={{ className: "delete-icon" }}>
                    <RiDeleteBin5Line onClick={handleClickDelete} />
                    </IconContext.Provider>
               
            </div>
        </>  
    )
}

export default Card;