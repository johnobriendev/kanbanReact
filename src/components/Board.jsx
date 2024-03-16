import { useState } from "react";
import './styles/Board.css';
import List from "./List";

function Board(){
    const [cards, setCards] = useState([]);
    return(
        <div className="board">
           <List/>
           <List/>
           <List/>
        </div>
    )
} 

export default Board