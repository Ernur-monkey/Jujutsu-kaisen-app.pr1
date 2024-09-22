import { Link } from "react-router-dom";



function PostCard({post}) {
    return (
        <div>
        <Link style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${post.imageUrl})`, backgroundSize:'cover', backgroundPosition:'center'}} to={`/post/${post.id}`} class="Base-card">
            <div class="content">
                <h3 class="Base-card__title">{post.title}</h3>
                <span class="Base-card__category">{post.category}</span>
            </div>
         </Link>
         </div>
    );
}


export default PostCard;