import { useState } from 'react';

const AddPostForm = ({state, addPost}) => {
    
    const start = {
        id: state.uid,
        title: '',
        body: '',
    }

    const [formState, setFormState] = useState(start);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(formState);
        setFormState({...start, id: state.uid});
    }

    return (
        <div className='form-flex'>
            <form className="add-post-form" onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required onChange={(e) => setFormState({...formState, title: e.target.value})}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" required onChange={(e) => setFormState({...formState, body: e.target.value})}></textarea>
                </div>
    
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddPostForm;