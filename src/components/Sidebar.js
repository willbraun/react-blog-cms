import AddPostForm from './AddPostForm';
import SidebarPost from './SidebarPost';

const Sidebar = ({state, selectItem, addPost}) => {
    
    const postList = state.posts.map(post => <SidebarPost selectItem={selectItem} key={post.id} {...post}/>)

    return (
        <nav className='sidebar'>
            <button type="button" id='add-post' onClick={() => selectItem({title: 'Add Post', content: <AddPostForm state={state} addPost={addPost}/>})}>Add Post</button>
            <ul>
                {postList}
            </ul>
        </nav>
    )
}

export default Sidebar;