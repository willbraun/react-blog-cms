const MainPost = ({title, body}) => {
    return (
        <main className="main-post">
            <div className="post-wrapper">
                <p className="main-title">{title}</p>
                <p className="main-body">{body}</p>
            </div>
        </main>
    )
}

export default MainPost;