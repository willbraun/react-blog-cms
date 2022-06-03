const SidebarPost = ({id, title, body, selectItem}) => {
    return (
        <li className="sidebar-post">
            <p className="side-title" onClick={() => selectItem({id, title, body})}>{title}</p>
        </li>
    )
}

export default SidebarPost;