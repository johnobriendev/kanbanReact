import React, {useState, useEffect} from "react";

function HomePage () {
    const [boards, setBoards] = useState('');
    const [newBoardTitle, setNewBoardTitle] = useState('');

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
        </div>
    )
}

export default HomePage