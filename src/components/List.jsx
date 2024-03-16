import { useState } from "react";
import "./styles/List.css";
import Card from "./Card";

function List({title, list, cards, setCards}){
    const [active, setActive] = useState(false);
    const filteredCards = cards.filter((card) => card.list === list);
    return(
        <div className="list-container">
            <div className="list-title-container">
                <h3>{title}</h3>
                <span>{filteredCards.length}</span>
            </div>
            <div className={`cards-container ${active ? "list-active" : "list-inactive"}`}>
                {filteredCards.map((c) =>{
                    <Card  key={c.id}{...c}/>;
                })}

            </div>

        </div>
    )
}

export default List;