import Dropline from "./Dropline";
import "./styles/Card.css"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useState } from "react";




function Card({title, id, list, handleDeleteCard}){
    const [isEditing, setIsEditing] = useState(false);
    const [cardTitle, setCardTitle] = useState(title);

    const handleClickDelete = () => handleDeleteCard(id);

    const handleTitleChange = (e) => {
        setCardTitle(e.target.value);
      };
    
    return(
        <>
            <Dropline beforeId={id} list={list}/>
            <div className="card-container">
                {isEditing ? (
                    <input
                    type="text"
                    value={cardTitle} 
                    onChange={handleTitleChange} 
                    onBlur={() => setIsEditing(false)} 
                    className="card"
                    autoFocus
                    />
                ) : ( 
                    <div draggable="true" className="card">
                        <p onClick={() => setIsEditing(true)}>{cardTitle}</p>
                    </div>
               )}
                    <IconContext.Provider value={{ className: "delete-icon" }}>
                    <RiDeleteBin5Line onClick={handleClickDelete} />
                    </IconContext.Provider>
               
            </div>
        </>  
    )
}

export default Card;