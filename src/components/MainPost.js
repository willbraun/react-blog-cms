const MainPost = ({title, body, content, id, deletePost}) => {
    let pageContent, header;
    if (content) {
        pageContent = <div className="main-content">{content}</div>
    }
    else {
        pageContent = <p className="main-body">{body}</p>
    }

    if (id) {
        header = (
            <header>
                <button type="button">Edit</button>
                <button type="button" onClick={() => deletePost(id)}>Delete</button>
            </header>
        )  
    }
    else {
        header = (<></>)
    }              

    return (
        <main className="main-post">
            {header}
            <div className="post-wrapper">
                <p className="main-title">{title}</p>
                {pageContent}
            </div>
        </main>
    )
}

export default MainPost;