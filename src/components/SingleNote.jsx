import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const SingleNote = ({ text, note, checkNote, deleteNote, editTextNote }) => {
    const [editNote, setEditNote] = useState(false);
    const [newTextNote, setTextNewNote] = useState(note.text)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTextNote(note.id, newTextNote)
        setEditNote(!editNote);
    }

  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-400 p-4">
        <div 
            className="flex justify-center p-0"
            style={{minHeight: "175px"}}
        >
            {editNote ?
            <>
            <form 
                className="flex flex-col items-end"
                style={{width: "100%", height: "100%"}}
                onSubmit={handleSubmit}
            >
                <textarea 
                    className="bg-transparent border-yellow-400 focus:outline-none"
                    style={{width: "100%", height: "135px", maxHeight: "135px", minHeight: "135px"}}
                    type="text" 
                    value={newTextNote}
                    onChange={(e) => setTextNewNote(e.target.value)}
                />
                <button
                    className="pt-5"
                >
                <MdOutlineEdit />
                </button>
            </form>
            </>
            : 
            <p>{text}</p>
            }
        </div>
        <div className="flex justify-between mt-2">
            <div>
                <input
                    className="mr-1 text text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox" 
                    checked={note.completed}
                    onChange={() => checkNote(note.id)}
                />
                {note.completed ? "Completed" :  "To Do"}
            </div>
            <div
                style={{height: "20px"}}
            >
                <button
                    className="mr-2"
                    onClick={() => setEditNote(!editNote)}
                    // disabled={editNote}
                >
                <FaRegEdit />
                </button>
                <button
                    type="click"
                    onClick={() => deleteNote(note.id)}
                >
                <RiDeleteBin2Line />
                </button>
            </div>
        </div>
    </article>
  )
}
export default SingleNote