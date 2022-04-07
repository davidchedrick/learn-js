import { useState } from "react";

function Body() {
    const [text, setText] = useState("");



    return(
        <div>
           
                <input
                    type="text"
                    placeholder="Text"
                    name="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            
           
            <div>text { text } </div>    
            <div>text.length {text.length}</div>
            <div>text.split("").reverse().join("") {text.split("").reverse().join("")}</div>
            
        </div>
    )
}

export default Body