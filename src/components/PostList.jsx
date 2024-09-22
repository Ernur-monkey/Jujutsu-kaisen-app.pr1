import {useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "../components/Error";

function PostList() {


    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://81331b4f5d461397.mokky.dev/post')
                setPosts(response.data); 
            } catch(error) {
                setIsError(true)
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();

    }, []);


    if (isError) {
        return <Error />
    }





    return (
        <div class="Information">
            {isLoading ? (<LoadingPost />) : (   
                <div class="Information">
                    {posts.map((post) =>
                    <PostCard key={post.id} post={post} />
                    )}
                </div>
            )}
        </div>
    );
}

export default PostList;