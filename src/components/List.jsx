import { useState } from "react";
import "./styles/List.css";

function List(title, list, cards, setCards){
    const [active, setActive] = useState(false);
    return(
        <div className="list-container">
            <div className="list-title-container">
                <h3>{title}</h3>
                <span>{cards.length}</span>
            </div>
            <div className={`cards-container ${active ? "list-active" : "list-inactive"}`}>

            </div>

        </div>
    )
}

export default List;