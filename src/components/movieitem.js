const MovieItem = (props)=>{
    return(
        <div><h3>{props.myMovie.Title} </h3>, 
        <p>{props.myMovie.Year}</p>, 
        {props.myMovie.imdbID}, 
       <img src = {props.myMovie.Poster}></img>
        </div>

    );
}

export default MovieItem;