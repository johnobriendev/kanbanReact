import "./styles/Card.css"

function Card({title, id, list}){
    return(
        <div draggable="true" className="card">
            <p>{title}</p>
        </div>
    )
}

export default Card;