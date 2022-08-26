import './style.css'
export default function LargeMovieList({listName , title}){
    function renderFactory(){
        return listName.map(function({matchType , startTime , image , title , sport} , index){
            return(
                <li key={index}><a href="#">
                    <img src={image}/>
                    <div className="info">
                        <p>{title}</p>
                        <p>{sport}-{matchType}</p>
                        <p id="text">{startTime}</p>
                    </div>
                    {/* if(startTime === "در حال پخش"){
                        document.getElementById("text").classList.add("red")
                    } */}
                </a></li>
            )
        })
    }
    return(
        <div className='live'>
            <h2>{title}</h2>
            <ul>{renderFactory()}</ul>
        </div>
    )
}