const SidebarPost = ({title, body, selectItem}) => {
    return (
        <li className="sidebar-post">
            <p className="side-title" onClick={() => selectItem({title, body})}>{title}</p>
        </li>
    )
}

export default SidebarPost;