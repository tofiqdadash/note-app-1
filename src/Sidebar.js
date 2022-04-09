import React, {useState} from 'react';


 function Sidebar({
  notes,
  handleAddNote ,
   handleDeleteNote ,
    activeNote , 
    setActiveNote,
  }) {

    const [btnClass , setBtnClass] = useState(false);

    //sort notes by last modified time
   const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)
  

  return (
    <article className='Sidebar'>
        <div className="sidebar-header">
        <h1>Notes</h1>
        <button className="add-btn" onClick={handleAddNote} >Add</button>
        </div>

        <div className='sidebar-notes'>
         
         {/* map through notes */}
            {sortedNotes.map(({id, title,body, lastModified} , i) => (
                <div 
                className={`sidebar-note ${id === activeNote && 'active'}`}
                key={id} onClick={() => setActiveNote(id)}>
                <div className='sidebar-note-header'>
                 <strong>{title}</strong>

                 {/* delete button */}
                <button className='delete-btn' onClick={(e) => handleDeleteNote(id)} >Delete</button>
                </div>

                <button 
                 onClick={(e) => {
                  btnClass  ? setBtnClass(false) : setBtnClass(true);
                }}
                className={btnClass ? "fav-note-btn clicked" : "fav-note-btn"}
                ></button>

                <p>
                {/* some limitations on body side */}
               {body && body.substr(0,20) + "..."}
                </p>

                {/* last modified time to local date string */}
                <small>Last modified {new Date(lastModified).toLocaleDateString('en-GB' , {
                    hour: '2-digit',
                    minute: '2-digit',
                })}</small>
            </div>
            ))}


        </div>
    </article>
  )
}

export default Sidebar;
