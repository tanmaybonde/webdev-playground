import SearchBar from "./Components/SearchBar";

function App(){

  const handleSubmit=(term)=>{
    console.log("do it with image",term);
  };
  return (
    <div >
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}

export default App;