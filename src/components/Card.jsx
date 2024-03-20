import Dropline from "./Dropline";
import "./styles/Card.css"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useState } from "react";




function Card({title, id, list, handleDeleteCard, handleDragStart, cards, setCards}){
    const [isEditing, setIsEditing] = useState(false);
    const [cardTitle, setCardTitle] = useState(title);

    const handleClickDelete = () => handleDeleteCard(id);

    const handleTitleChange = (e) => {
        setCardTitle(e.target.value);
      };
    const handleBlur = () => {
        setIsEditing(false);
        // Update cards state on blur if title has changed
        if (cardTitle !== title) {
            const updatedCards = cards.map((card) => (card.id === id ? { ...card, title: cardTitle } : card));
            setCards(updatedCards); // Update cards state directly
        }
    };
    const handleKeyDown = (e) => {
        if (isEditing && e.key === "Enter" && !e.shiftKey) {
          handleBlur(e); 
        }
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
                    onBlur={handleBlur} 
                    className="card-editing"
                    autoFocus
                    onKeyDown={handleKeyDown}
                    />
                ) : ( 
                    <div draggable="true"
                     className="card"
                     onDragStart={(e) => handleDragStart(e,{title, id, list})}
                    >
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