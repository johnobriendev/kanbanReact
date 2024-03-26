import { useState } from "react"
import "./styles/AddCard.css"
import { useEffect } from "react";
import { useRef } from "react";
import { useId } from 'react';

function AddCard({list, setCards}) {
    const [text, setText] = useState('');
    const [adding, setAdding] = useState(false);
    const textAreaRef = useRef(null); 
    const formId = useId(); 

    const handleAddCard = (e) => {
        e.preventDefault();
        if (!text.trim().length) return;

        const newCard = {
            list,
            title : text.trim(),
            id: Math.random().toString(),
        }

        
        setCards((pv) => [...pv, newCard]);
        //setAddiing(false);
        setText('');
        
    }

    const handleKeyDown = (e) => {
        if (adding && e.key === "Enter" && !e.shiftKey) {
            //e.preventDefault();
            handleAddCard(e); // Call submit function on Enter key press only in "adding" mode
        }
      };
   
    const handleClickOutside = (event) => {
        if (textAreaRef.current && !textAreaRef.current.contains(event.target) && 
            !(event.target.classList.contains("close-textarea") || 
                event.target.classList.contains("add-textarea") || 
                event.target.classList.contains("add-card-btn"))) {
            setAdding(false);
        }
    };
    
    // const handleClickOutside = (event) => {
    //     if (textAreaRef.current && !textAreaRef.current.contains(event.target) && 
    //         !((event.target.classList.contains("close-textarea") && event.target.id === formId) || 
    //           (event.target.classList.contains("add-textarea") && event.target.id === formId)|| 
    //           (event.target.classList.contains("add-card-btn") && event.target.id === formId))) {
    //         setAdding(false);
    //     } 
    // };
    
        
    useEffect(() => {
        document.addEventListener("click", handleClickOutside); // Add event listener on component mount
        return () => document.removeEventListener("click", handleClickOutside); // Remove on unmount
    }, []); // Empty dependency array to run only once

return(
        <>
        {adding ? ( 
            <form onSubmit={handleAddCard} id={formId}>
                <textarea
                    value={text} //set this so that textarea clears after card is submitted but window stays open
                    onChange={(e) =>  setText(e.target.value)}
                    autoFocus
                    placeholder="Add a new card"
                    className="add-card-textarea"
                    onKeyDown={handleKeyDown}
                    ref={textAreaRef}
                    //onBlur={(e) => setAdding(false)}
                    //onBlur={(e) => !e.submitter ? setAdding(false) : null}
                >
                </textarea>
                <div className="btn-container">
                    <button onClick={(e) => setAdding(false)}  className="close-textarea">Close</button>
                    <button type="submit" className="add-textarea">Add +</button>
                </div>
            </form>
        ) : (
            <button className="add-card-btn" onClick={() => {
                setAdding(true)
                setOpenAddCardId(list.id);
                }}>
                <span>Add Card</span>
                <span>+</span>
            </button>
        )
        
        }
        </>
    )
}

export default AddCard 