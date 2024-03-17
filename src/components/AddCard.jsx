import { useState } from "react"
import "./styles/AddCard.css"

function AddCard() {
    const [text, setText] = useState('');
    const [adding, setAdding] = useState(false);

    return(
        <>
        {adding ? ( 
            <></>
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