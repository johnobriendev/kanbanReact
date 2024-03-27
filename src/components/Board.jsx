import { useEffect, useState } from "react";
import './styles/Board.css';
import List from "./List";

function Board(){
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const data = localStorage.getItem("cards");
    
        setCards(data ? JSON.parse(data) : exampleCards); // Use exampleCards if no data in localStorage
    }, []);
    
    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);
    
    // const [checkLocalStorage, setCheckLocalStorage] = useState(false);

    // useEffect(() => {
    //     checkLocalStorage && localStorage.setItem("cards", JSON.stringify(cards));
    // } , [cards]);

    // useEffect(() => {
    //     const data = localStorage.getItem("cards");

    //     setCards(data ? JSON.parse(data) : []);

    //     setCheckLocalStorage(true);
    // } , [])
    
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
    {title: "Welcome to John's Kanban", id: "1", list: "backlog"},
    {title: "Useful for Error Tracking and Project Management", id: "2", list: "backlog"},
    {title: "Click add a card to add a card to a list", id: "3", list: "inProgress"},
    {title: "Click on cards to edit them, click the delete icon to delete", id: "4", list: "inProgress"},
    {title: "Cards are draggable to other lists", id: "5", list: "complete"},
    {title: "All card data is saved in Local Storage so it won't be lost on refresh", id: "6", list: "complete"},    
]
