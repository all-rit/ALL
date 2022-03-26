import { useState } from "react";

const CreateText = () => {
    //need to set up a state to track input values
    const [userInput, setInput] = useState('Jason');
    //maybe change setTitle either to
    //setText or setUsername, currently unsure
    //or just have two different constants for
    //that predetermined inputs from these random users
    
    const [author, setAuthor] = useState('Claire');

    

    return (
        <div className="createText">
            <h2>Add new input</h2>
            //change to onclick??
            <form onSubmit={''}>
                <label>Chat Box</label>
                <input
                type="text"
                required
                value={userInput}
                onChange={(e) => setInput(e.target.value)}
                />
                <label>Chat Box Body</label>
                <textarea
                    required
                ></textarea>
                <label>Chat Box Fake People</label>
                //People who already have inputs
                <select
                    value= {author}
                    //hopefully start to changing usernames of people in textbox.
                    onChange={(e) => setAuthor(e.target.value)}
                >
                <option value="Claire">Claire</option>
                <option value="Blake">Blake</option>
                </select>
                <button>Submit input</button>
                <p>{userInput}</p>
                <p>{author}</p>
                //tracks user input that they're typing.
               
            </form>
        </div>
    )
}

export default CreateText;