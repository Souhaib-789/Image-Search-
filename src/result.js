import React from "react";


function Result(props){
//    const  image= `https://source.unsplash.com/400x300/?${props.name}`;
    return(
        <div>
             <img src={`https://source.unsplash.com/400x300/?${props.name}`} class="rounded mx-auto d-block" alt="Loading..."/>
             
        </div>
    );
}
export default Result;