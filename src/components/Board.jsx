import { useEffect, useState } from "react";
import './styles/Board.css';
import List from "./List";

function Board({match}) {
    console.log("this is a test")
    console.log(match);
    
    const [boardData, setBoardData] = useState(null);
  
    useEffect(() => {
      const storedBoards = JSON.parse(localStorage.getItem("boards")) || [];
      const foundBoard = storedBoards.find(
        (board) => board.title === match.params.boardTitle
      );
      setBoardData(foundBoard);
    }, [match.params.boardTitle]);
  
    return (
      boardData && (
        <div className="board" id={boardData.id}>  {/* Add board ID as the container ID */}
          <h2>{boardData.title}</h2>
          {boardData.cards.length > 0 ? (
            boardData.lists.map((list) => (
              <List
                key={list.id}
                title={list.title}
                list={list.id}
                board={boardData} // Pass the entire board object
                setBoards={(updatedBoards) => { // Update function receives updated boards state
                  const localStorageBoards = JSON.parse(localStorage.getItem("boards")) || [];
                  const boardIndex = localStorageBoards.findIndex((b) => b.id === boardData.id);
                  localStorageBoards[boardIndex] = updatedBoards.find((b) => b.id === boardData.id);
                  localStorage.setItem("boards", JSON.stringify(localStorageBoards));
                }}
              />
            ))
          ) : (
            <p>No cards for this board yet.</p>
          )}
        </div>
      )
    );
}
  
  export default Board;

// function Board(){
//     const [cards, setCards] = useState([]);
//     const [checkLocalStorage, setCheckLocalStorage] = useState(false);

//     useEffect(() => {
//         checkLocalStorage && localStorage.setItem("cards", JSON.stringify(cards));
//     } , [cards]);

//     useEffect(() => {
//         const data = localStorage.getItem("cards");

//         setCards(data ? JSON.parse(data) : []);

//         setCheckLocalStorage(true);
//     } , [])
    
//     return(
//         <div className="board">
//            <List
//             title="Backlog"
//             list="backlog"
//             cards={cards}
//             setCards={setCards}
//            />
//           <List
//             title="In Progress"
//             list="inProgress"
//             cards={cards}
//             setCards={setCards}
//            />
//            <List
//             title="Complete"
//             list="complete"
//             cards={cards}
//             setCards={setCards}
//             //boardId={boardData.id}
//            />
//         </div>
//     )
// } 

// export default Board

// const exampleCards = [
//     {title: "Work on Project", id: "1", list: "backlog"},
//     {title: "Buy food", id: "2", list: "backlog"},
//     {title: "Exercise", id: "3", list: "inProgress"},
//     {title: "Water the plants", id: "4", list: "inProgress"},
//     {title: "Wash the car", id: "5", list: "complete"},
//     {title: "Fix broken component", id: "6", list: "complete"},    
// ]



// function Board({ match }) {
//     const [boardData, setBoardData] = useState(null);
  
//     useEffect(() => {
//       const storedBoards = JSON.parse(localStorage.getItem('boards')) || [];
//       const foundBoard = storedBoards.find(
//         (board) => board.title === match.params.boardTitle
//       );
//       setBoardData(foundBoard);
//     }, [match.params.boardTitle]);
  
//     const filteredCards = boardData?.cards || [];
  
//     return (
//       boardData && (
//         <div className="board">
//           <h2>{boardData.title}</h2>
//           <List
//             title="Backlog"
//             list="backlog"
//             cards={filteredCards}
//             boardId={boardData.id}
//             setCards={handleUpdateCard}
//             //setCards={/* Function to update card data within Local Storage */}
//           />
//           <List
//             title="In Progress"
//             list="inProgress"
//             cards={filteredCards}
//             boardId={boardData.id}
//             setCards={handleUpdateCard}
//             //setCards={/* Function to update card data within Local Storage */}
//           />
//           <List
//             title="Complete"
//             list="complete"
//             cards={filteredCards}
//             boardId={boardData.id}
//             setCards={handleUpdateCard}
//             //setCards={/* Function to update card data within Local Storage */}
//           />
//         </div>
//       )
//     );
// }
  
// export default Board;

// const handleUpdateCard = (cardData) => {
//     const updatedBoards = [...boards];
//     const boardIndex = updatedBoards.findIndex(
//       (board) => board.id === cardData.boardId
//     );
  
//     updatedBoards[boardIndex].cards = updatedBoards[boardIndex].cards.map((card) =>
//       card.id === cardData.id ? cardData : card
//     );
  
//     setBoards(updatedBoards);
//     localStorage.setItem('boards', JSON.stringify(updatedBoards));
//   };
  