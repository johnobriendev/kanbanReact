import { useState } from "react";
import "./styles/List.css";
import Card from "./Card";
import Dropline from "./Dropline";
import AddCard from "./AddCard";
import { v4 as uuidv4 } from 'uuid';


function List({title, list, cards, setCards}){
    const [active, setActive] = useState(false);
    const filteredCards = cards.filter((c) => c.list === list).map((c) => ({ ...c, uniqueId: generateUniqueId() }));
    
    function generateUniqueId() {
        return uuidv4();
    }

    const handleDeleteCard = (cardId) =>{
        setCards((prev) => prev.filter((c) => c.id !== cardId));
    }

    const handleDragStart = (e, card) =>{
        e.dataTransfer.setData("cardId", card.id);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    }
    const handleDragLeave = (e) => {
        setActive(false);
    }
    const handleDragEnd = (e) => {
        setActive(false);
    }
  
    
    return(
        <div className="list-container">
            <div className="list-title-container">
                <h3>{title}</h3>
                <span>{filteredCards.length}</span>
            </div>
            <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDragEnd}
            className={`cards-container ${active ? "list-active" : "list-inactive"}`}>
                {filteredCards.map((c) =>{
                   return <Card  
                   key={c.uniqueId}{...c} 
                   handleDeleteCard={handleDeleteCard}
                   handleDragStart={handleDragStart} 
                    />;
                })}
                <Dropline beforeId={-1} list={list}/>
                <AddCard list={list} setCards={setCards}/>
            </div>

        </div>
    )
}

export default List;