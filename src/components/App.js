// create your App component here

import React,{useState, useEffect} from "react";

function App() {
    const [dogPic, setDogPic] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            setDogPic(data.message)
            setIsLoading(false)
        })
    },[])

    return (
        <div>
            {isLoading ? (<p>Loading...</p>): (<img src={dogPic} alt="A Random Dog"/>)}
        </div>
    
    )
    
}

export default App