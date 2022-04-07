import { useState } from "react";

function Body() {
    const [textForm, setTextForm] = useState({
        text: ""
    });

    function handleUpdateData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setTextForm({
            ...textForm, [targetName]: targetValue
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newText ={    
            ...textForm,
        }
        
        handleUpdateData(newText);

        setTextForm({
            text: "",
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Text"
                    name="text"
                    // value={}
                    // onChange={}
                />
                <input type="submit" value="Submit" />
            </form>
            <div>
                { textForm.text }
            </div>
        </div>
    )
}

export default Body