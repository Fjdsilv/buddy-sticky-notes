import SingleNote from "./SingleNote"

const Notes = ({ notes, checkNote, deleteNote, editTextNote, showCompleted }) => {
  if (notes.length === 0) {
    return (
      <section className="container mx-auto mt-5 px-4 max-w-screen-lg">
        <h2 className="text-center font-bold text-xl">🙄No Note Yet. Add A new Note!✏</h2>
      </section>
    )

  }

  // if (notes.find((note) => note.completed === false )) {
  //   return (
  //     <section className="container mx-auto mt-5 px-4 max-w-screen-lg">
  //       <h2 className="text-center font-bold text-xl">🙄No Note Completed Yet. Sorry!✏</h2>
  //     </section>
  //   )
  // }
 
  return (
    <section className="grid gap-5 grid-cols-2 md:grid-cols-4 container mx-auto mt-5 px-4 max-w-screen-lg">
      {showCompleted ?
        <>
          {
            notes.filter((note) => note.completed === true).map((note) => {
              return <SingleNote  
                        key={note.id} 
                        {...note} 
                        note={note}
                        checkNote={checkNote}
                        deleteNote={deleteNote}
                        editTextNote={editTextNote}
                      />
            })
          }
        </>
        :
        <>
          {
            notes.map((note) => {
              // if (note.completed) {
              // return
              // }
              // else {
              //   return  <SingleNote  
              //             key={note.id} 
              //             {...note} 
              //             note={note}
              //             checkNote={checkNote}
              //             deleteNote={deleteNote}
              //             editTextNote={editTextNote}
              //          />
              // }

              return (
                <SingleNote  
                    key={note.id} 
                    {...note} 
                    note={note}
                    checkNote={checkNote}
                    deleteNote={deleteNote}
                    editTextNote={editTextNote}
                />
              )
            })
          }
        </>
      }
    </section>
  )
}
export default Notes


