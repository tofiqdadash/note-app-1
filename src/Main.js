import React from 'react';

 function Main({activeNote , handleUpdateNote}) {

  const onEditField = (field , value) => {
    handleUpdateNote({
      ...activeNote,
      [field ] : value,
      lastModified: Date.now(),
    });
  }

  if (!activeNote) return <div className="no-active-note">No Active Note...</div>;


  return (
    <main className="Main">
        <div className='main-note-edit'>
       <input 
       type="text"
       id="title"
       placeholder="Note title..."
       value = {activeNote.title}
       onChange = {(e) => onEditField('title' , e.target.value)}
       />

       <textarea 
       id="body"
       placeholder="Write your note here..."
       value={activeNote.body}
       onChange = { (e) => onEditField('body' , e.target.value)}
       />
        </div>

        <div className='main-note-preview'>
        <h2 className='preview-title'>{activeNote.title}</h2>
        <p className='preview-body'>{activeNote.body}</p>
        </div>
    </main>
  )
}

export default Main;

