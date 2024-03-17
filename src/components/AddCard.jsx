import { useState } from "react"
import "./styles/AddCard.css"

function AddCard({list, setCards}) {
    const [text, setText] = useState('');
    const [adding, setAdding] = useState(false);

    const handleAddCard = (e) => {
        e.preventDefault();
        if (!text.trim().length) return;

        const newCard = {
            list,
            title : text.trim(),
            id: Math.random().toString(),
        }

        setCards((pv) => [...pv, newCard]);
        setAdding(false);
        setText('');
    }

    return(
        <>
        {adding ? ( 
            <form onSubmit={handleAddCard}>
                <textarea
                    onChange={(e) =>  setText(e.target.value)}
                    autoFocus
                    placeholder="Add a new card"
                    className="add-card-textarea"
                >
                </textarea>
                <div>
                    <button onClick={(e) => setAdding(false)}  className="close-textarea">Close</button>
                    <button type="submit" className="add-textarea">Add +</button>
                </div>
            </form>
        ) : (
            <button className="add-card-btn" onClick={() => setAdding(true)}>
                <span>Add Card</span>
                <span>+</span>
            </button>
        )
        
        }
        </>
    )
}

export default AddCard 