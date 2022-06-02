const MainPost = ({title, body, content}) => {
    let pageContent;
    if (content) {
        pageContent = <div className="main-content">{content}</div>
    }
    else {
        pageContent = <p className="main-body">{body}</p>
    }

    return (
        <main className="main-post">
            <div className="post-wrapper">
                <p className="main-title">{title}</p>
                {pageContent}
            </div>
        </main>
    )
}

export default MainPost;