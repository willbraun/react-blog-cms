import AddPostForm from './AddPostForm';
import SidebarPost from './SidebarPost';

const Sidebar = ({data, selectPost}) => {

    const postList = data.map((post, i) => <SidebarPost selectPost={selectPost} key={i} {...post}/>)

    return (
        <nav className='sidebar'>
            <button type="button" onClick={() => selectPost({title: 'Add Post', body: <AddPostForm />})}>Add Post</button>
            <ul>
                {postList}
            </ul>
        </nav>
    )
}

export default Sidebar;