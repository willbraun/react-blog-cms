import SidebarPost from './SidebarPost';

const Sidebar = ({data, selectPost}) => {

    const postList = data.map((post, i) => <SidebarPost selectPost={selectPost} key={i} {...post}/>)

    return (
        <nav className='sidebar'>
            <ul>
                {postList}
            </ul>
        </nav>
    )
}

export default Sidebar;