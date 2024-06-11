function SearchBar({onSubmit}){
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        onSubmit('cars');
    };
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input />
            </form>
            
            {/* <button onClick={handleClick}>Click me</button> */}
        </div>
    )
}

export default SearchBar;