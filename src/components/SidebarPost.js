const SidebarPost = ({title, body, selectPost}) => {
    return (
        <li className="sidebar-post">
            <p className="side-title" onClick={() => selectPost({title, body})}>{title}</p>
        </li>
    )
}

export default SidebarPost;