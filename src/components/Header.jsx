import { BiShow, BiHide } from "react-icons/bi";

const Header = ({ handleCompleted, showCompleted }) => {
  return (
    <header className="bg-yellow-400 p-6">
      <nav className="text-center container mx-auto flex justify-between max-w-screen-lg">
        <h2 className=" text-5xl font-extrabold">Buddy Sticky Notes</h2>
        <button
          className="flex items-center gap-2 font-bold"
          type="button"
          onClick={handleCompleted}
        >
        { showCompleted ? "Show All Notes" : "Show Completed" } 
        { showCompleted ? <BiHide />  : <BiShow /> }
        </button>
      </nav>
    </header>
  )
}
export default Header



//Show Completed
//Hide Completed