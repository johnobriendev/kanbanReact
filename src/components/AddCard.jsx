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

    const handleKeyDown = (e) => {
        if (adding && e.key === "Enter" && !e.shiftKey) {
            //e.preventDefault();
            handleAddCard(e); // Call submit function on Enter key press only in "adding" mode
        }
      };

    return(
        <>
        {adding ? ( 
            <form onSubmit={handleAddCard}>
                <textarea
                    onChange={(e) =>  setText(e.target.value)}
                    autoFocus
                    placeholder="Add a new card"
                    className="add-card-textarea"
                    onKeyDown={handleKeyDown}
                    //onBlur={(e) => setAdding(false)}
                    onBlur={(e) => !e.submitter ? setAdding(false) : null}
                >
                </textarea>
                <div className="btn-container">
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