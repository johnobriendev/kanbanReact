import { useEffect, useState } from "react";
import './styles/Board.css';
import List from "./List";

function Board(){
    const [cards, setCards] = useState([exampleCards]);
    const [checkLocalStorage, setCheckLocalStorage] = useState(false);

    useEffect(() => {
        checkLocalStorage && localStorage.setItem("cards", JSON.stringify(cards));
    } , [cards]);

    useEffect(() => {
        const data = localStorage.getItem("cards");

        setCards(data ? JSON.parse(data) : []);

        setCheckLocalStorage(true);
    } , [])
    
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
            list="complete"
            cards={cards}
            setCards={setCards}
           />
        </div>
    )
} 

export default Board

const exampleCards = [
    {title: "Work on Project", id: "1", list: "backlog"},
    {title: "Buy food", id: "2", list: "backlog"},
    {title: "Exercise", id: "3", list: "inProgress"},
    {title: "Water the plants", id: "4", list: "inProgress"},
    {title: "Wash the car", id: "5", list: "complete"},
    {title: "Fix broken component", id: "6", list: "complete"},    
]
