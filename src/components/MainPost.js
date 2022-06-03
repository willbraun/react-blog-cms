import { useState } from 'react';

const MainPost = ({state, setIsEditing, editPost, deletePost}) => {
    const [id, title, body, content, isEditing] = [state.selection.id, state.selection.title, state.selection.body, state.selection.content, state.isEditing]
    let pageContent, header;

    const [mainState, setMainState] = useState({
        newTitle: title,
        newBody: body,
    })

    const saveEdit = () => {
        editPost(id, mainState.newTitle, mainState.newBody);
    }
 
    if (id) {
        header = (
            <header>
                <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                <button type="button" onClick={() => deletePost(id)}>Delete</button>
            </header>
        )  
    }
    else {
        header = (<></>)
    }    
    
    if (content) {
        pageContent = <div className="main-content">{content}</div>
    }
    else {
        pageContent = <p className="main-body">{body}</p>
    }

    const previewHTML = (
        <main className="main-post">
            {header}
            <div className="post-wrapper">
                <p className="main-title">{title}</p>
                {pageContent}
            </div>
        </main>
    )

    const editHTML = (
        <main className="main-post">
            <div className="post-wrapper">
                <label htmlFor={`title${id}`}>Title</label>
                <input type="text" id={`title${id}`} value={mainState.newTitle} onChange={(e) => setMainState({...mainState, newTitle: e.target.value})}/>
                
                <label htmlFor={`body${id}`}>Body</label>
                <input type="text" id={`body${id}`} value={mainState.newBody} onChange={(e) => setMainState({...mainState, newBody: e.target.value})}/>
                
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={() => saveEdit()}>Save</button>
            </div>
        </main>
    )

    return (
        <>{ isEditing ? editHTML : previewHTML }</>
    )
}

export default MainPost;