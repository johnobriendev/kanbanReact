import { useState } from "react";
import './styles/Board.css';
import List from "./List";

function Board(){
    const [cards, setCards] = useState([]);
    return(
        <div className="board">
           <List
            title="Backlog"
            list="backlog"
            cards={cards}
            setCards={setCards}
           />
          <List
            title="In Progress"
            list="inProgress"
            cards={cards}
            setCards={setCards}
           />
           <List
            title="Complete"
            list="Complete"
            cards={cards}
            setCards={setCards}
           />
        </div>
    )
} 

export default Board