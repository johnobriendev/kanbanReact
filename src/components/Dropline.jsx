import "./styles/Dropline.css"

function Dropline({beforeId, list}) {
    return(
        <div className="dropline" data-before={beforeId || -1} data-list={list} >

        </div>
    )
}

export default Dropline