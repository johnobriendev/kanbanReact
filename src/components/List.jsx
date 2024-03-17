import { useState } from "react";
import "./styles/List.css";
import Card from "./Card";
import Dropline from "./Dropline";
import AddCard from "./AddCard";

function List({title, list, cards, setCards}){
    const [active, setActive] = useState(false);
    const filteredCards = cards.filter((c) => c.list === list);
    return(
        <div className="list-container">
            <div className="list-title-container">
                <h3>{title}</h3>
                <span>{filteredCards.length}</span>
            </div>
            <div className={`cards-container ${active ? "list-active" : "list-inactive"}`}>
                {filteredCards.map((c) =>{
                   return <Card  key={c.id}{...c}/>;
                })}
                <Dropline beforeId={-1} list={list}/>
                <AddCard list={list} setCards={setCards}/>
            </div>

        </div>
    )
}

export default List;