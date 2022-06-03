import { useState } from 'react';

const MainPost = ({state, setIsEditing, editPost, deletePost}) => {
    let pageContent, header;

    const [mainState, setMainState] = useState({
        newTitle: '',
        newBody: '',
    })

    const saveEdit = () => {
        editPost(state.selection.id, mainState.newTitle, mainState.newBody);
    }
 
    if (state.selection.id) {
        header = (
            <header>
                <button type="button" id='edit' onClick={() => {
                    setIsEditing(true); 
                    setMainState({
                        newTitle: state.selection.title,
                        newBody: state.selection.body,
                    })}}>Edit</button>
                <button type="button" id='delete' onClick={() => deletePost(state.selection.id)}>Delete</button>
            </header>
        )  
    }
    else {
        header = (<></>)
    }    
    
    if (state.selection.content) {
        pageContent = <div className="main-content">{state.selection.content}</div>
    }
    else {
        pageContent = <p className="main-body">{state.selection.body}</p>
    }

    const previewHTML = (
        <main className="main-post">
            {header}
            <div className="post-wrapper">
                <p className="main-title">{state.selection.title}</p>
                {pageContent}
            </div>
        </main>
    )

    const editHTML = (
        <main className="main-post">
            <div className="edit-post-wrapper">
                <label htmlFor='edit-title'></label>
                <input type="text" id='edit-title' value={mainState.newTitle} onChange={(e) => setMainState({...mainState, newTitle: e.target.value})}/>
                
                <label htmlFor='edit-body'></label>
                <textarea id='edit-body' value={mainState.newBody} onChange={(e) => setMainState({...mainState, newBody: e.target.value})}></textarea>
                
                <div className='edit-buttons'>
                    <button type="button" id='cancel' onClick={() => setIsEditing(false)}>Cancel</button>
                    <button type="button" id='save' onClick={() => saveEdit()}>Save</button>
                </div>
            </div>
        </main>
    )

    return (
        <>{ state.isEditing ? editHTML : previewHTML }</>
    )
}

export default MainPost;