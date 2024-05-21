import { useState } from "react"
import { toast } from "react-toastify";


const Form = ({ addNote }) => {
 const [text, setText] = useState("")
 const [message, setMessage] = useState(null);

 const handleInput = (e) => {
    console.log(text.length)
    if(text.trim().length > 30) {
        setMessage(true);
    }


    setText(e.target.value)
 }

 const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
        toast.warn("Enter a Note.")
        return
    }
    else {
        addNote(text);
        setMessage(false);
        setText("");
    }
 }

  return (
    <section className="container mx-auto justify-center">
        <form 
            className="p-3 mt-2 flex justify-center gap-2"
            onSubmit={handleSubmit}
        >
            <input
                className="p-3 border-solid border-2 min-w-96 border-yellow-400 focus:outline-none" 
                type="text"
                value={text}
                onChange={(e) => handleInput(e)} 
                placeholder="Type a Note..."
            />
            <button
                className="border-solid border-2 p-1 px-3 font-bold border-yellow-400"
                type="submit"
                onClick={() => {}}
            >Add Note</button>
        </form>
        <div>
           {message ?
             <p className="text-center">Note must be at maximum 30 characters.</p>
             :
             ""
           }
        </div>
    </section>
  )
}
export default Form