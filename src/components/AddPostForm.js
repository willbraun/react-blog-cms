import { useState } from 'react';

const AddPostForm = ({addPost}) => {
    
    const blank = {
        title: '',
        body: '',
    }

    const [state, setState] = useState(blank);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(state);
        setState(blank);
    }

    return (
        <div className='form-flex'>
            <form className="add-post-form" onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required onChange={(e) => setState({...state, title: e.target.value})}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" required onChange={(e) => setState({...state, body: e.target.value})}></textarea>
                </div>
    
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddPostForm;