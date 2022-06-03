const MainPost = ({title, body, content, deletePost}) => {
    let pageContent;
    if (content) {
        pageContent = <div className="main-content">{content}</div>
    }
    else {
        pageContent = <p className="main-body">{body}</p>
    }

    return (
        <main className="main-post">
            <header>
                <button type="button" onClick={() => deletePost}>Edit</button>
                <button type="button">Delete</button>
            </header>
            <div className="post-wrapper">
                <p className="main-title">{title}</p>
                {pageContent}
            </div>
        </main>
    )
}

export default MainPost;