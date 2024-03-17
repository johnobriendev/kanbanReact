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
        lineIndicator(e);
        setActive(true);
    }
    const lineIndicator = (e) =>{
        const indicators = getIndicators();
        const el = getNearestIndicator(e, indicators);
        clearLines(indicators);
        el.element.style.opacity = "1";
    }
    const clearLines = (els) => {
        const indicators = els || getIndicators();
        indicators.forEach((indicator) => {
            indicator.style.opacity = "0";
        })
    }
    const getNearestIndicator = (e, indicators) => {
        const DISTANCE_OFFSET = 50; //use this so we can hover above the top card

        const el = indicators.reduce(
          (closest, child) => {
            const box = child.getBoundingClientRect(); //gives position of indicators
    
            const offset = e.clientY - (box.top + DISTANCE_OFFSET); //distance between mouse and top of indicator
    
            if (offset < 0 && offset > closest.offset) {
              return { offset: offset, element: child };
            } else {
              return closest;
            }
          },
          {
            offset: Number.NEGATIVE_INFINITY,
            element: indicators[indicators.length - 1],
          }
        );
    
        return el;
    }
    const getIndicators = () =>{
        return Array.from(document.querySelectorAll(`[data-list="${list}"]`));
    }
    const handleDragLeave = (e) => {
        setActive(false);
        clearLines();
    }
    const handleDragEnd = (e) => {
        setActive(false);
        clearLines();
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