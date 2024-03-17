import { useState } from "react"

function AddCard() {
    const [text, setText] = useState('');
    const [adding, setAdding] = useState(false);

    return(
        <>
        {adding ? ( 
            <></>
        ) : (
            <button onClick={() => setAdding(true)}>
                <span>Add Card</span>
                <span>+</span>
            </button>
        )
        
        }
        </>
    )
}

export default AddCard 