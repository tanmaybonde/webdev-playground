import './SearchBar.css'
import {useState} from 'react';

function SearchBar({onSubmit}){
    const [term,setTerm]=useState("");

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange=(event)=>{
        setTerm(event.target.value);
    };

    return(
        <div className="search-bar">
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleChange} value={term}/>
            </form>
            
            {/* <button onClick={handleClick}>Click me</button> */}

        </div>
    )
}

export default SearchBar;