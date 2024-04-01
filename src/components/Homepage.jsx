import React, {useState, useEffect} from "react";

function HomePage () {
    const [boards, setBoards] = useState([]);
    const [newBoardTitle, setNewBoardTitle] = useState('');

    const handleCreateBoard = () => {
        setBoards([...boards, {
          title: newBoardTitle,
          cards: [],
        }]);
        setNewBoardTitle('');
    };

    return (
        <div>
            <h1>Kanban Board</h1>
            <h4>Project Managment and Error Tracking Tool</h4>
            <input
                type="text"
                value={newBoardTitle}
                onChange={(e) => setNewBoardTitle(e.target.value)}
                placeholder="Enter a Board Title"
            />
            
            <button onClick={handleCreateBoard}>Create Board</button>
            <ul>
                {boards.map((board) => (
                <li key={board.title}>
                    <Link to={`/board/${board.title}`}>{board.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage