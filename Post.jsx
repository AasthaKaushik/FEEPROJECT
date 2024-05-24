import "./post.css"
export default function Post({
  imgSrc,
  postCatsContent1,
  postCatsContent2,
  postTitleContent,
postDate,
postDesc}) {
  return (   
    <div>
      <div className="post">
        <img className="postImg"
            src={imgSrc}
            alt="abo"
        />
        <div className="postInfo">
            <div className="postCats">
            <span className="postCat">{postCatsContent1}</span>
            <span className="postCat">{postCatsContent2}</span>
            </div>
            <span className="postTitle">{postTitleContent}</span>
            <hr/>
            <span className="postDate">{postDate}</span>
        </div>
        <p className="postDesc">{postDesc}</p>
      </div>
    </div>
  )
}
