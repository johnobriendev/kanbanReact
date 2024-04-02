import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './styles/Homepage.css'

function HomePage () {
    const [boards, setBoards] = useState(JSON.parse(localStorage.getItem('boards')) ||[]);
    const [newBoardTitle, setNewBoardTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards));
    }, [boards]);

    const handleCreateBoard = () => {
        setBoards([...boards, {
          title: newBoardTitle,
          id: Math.random().toString(),
          cards: [],
        }]);
        setNewBoardTitle('');
    };

    return (
        <div className="homepage">
            <div className="top">
                <h1>Kanban Board</h1>
                <h4>Project Managment and Error Tracking Tool</h4>
               
               <div className="input-container">
                    <input
                            type="text"
                            value={newBoardTitle}
                            onChange={(e) => setNewBoardTitle(e.target.value)}
                            placeholder="Enter a Board Title"
                        />
                        
                    <button onClick={handleCreateBoard}>Create Board</button>
               </div>
                
            </div>
            
            
            
            <div className="bottom">
                <h2>My Boards</h2>
                <ul>
                    {boards.map((board) => (
                    <li key={board.title}>
                        <Link className="board-link" key={board.id} to={`/board/${board.title}`}>{board.title}</Link>
                    </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default HomePage

const exampleCards = [
    {title: "Work on Project", id: "1", list: "backlog"},
    {title: "Buy food", id: "2", list: "backlog"},
    {title: "Exercise", id: "3", list: "inProgress"},
    {title: "Water the plants", id: "4", list: "inProgress"},
    {title: "Wash the car", id: "5", list: "complete"},
    {title: "Fix broken component", id: "6", list: "complete"},    
]
