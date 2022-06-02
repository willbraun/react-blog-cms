import AddPostForm from './AddPostForm';
import SidebarPost from './SidebarPost';

const Sidebar = ({data, selectItem, addPost}) => {
    
    const postList = data.map((post, i) => <SidebarPost selectItem={selectItem} key={i} {...post}/>)

    return (
        <nav className='sidebar'>
            <button type="button" onClick={() => selectItem({title: 'Add Post', content: <AddPostForm addPost={addPost}/>})}>Add Post</button>
            <ul>
                {postList}
            </ul>
        </nav>
    )
}

export default Sidebar;