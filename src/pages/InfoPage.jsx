import { Link, useParams } from "react-router-dom";
import BackIcon from "../assets/images/sukuna.svg";
import axios from "axios";
import { useEffect, useState,} from "react";
import LoadingPost from "../components/LoadingPost";
import Error from "../components/Error";



function InfoPage() {

    const {id} = useParams();
    const [info, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://81331b4f5d461397.mokky.dev/info/${id}`);
                setPost(response.data);
            } catch (error) {
                setIsError(true)
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);


    if (isError) {
        return <Error />
    }

    return (
        <main class="back">
            <section class="mobile-block-head">
                <div class="mobile-block_header2 is-perfect">
                    <Link to="/" class="backtainer is-monkey">
                    <h3>Обратно</h3>
                    </Link>
                        Маги и Шаманы
                </div> 
            {isLoading ? (<LoadingPost/>) :(
                <div class="Information">
                    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${info.ImageUrl})`, backgroundSize:'cover', backgroundPosition:'center'}} class="GIF-card"></div>
                    <div class="Base-card is-info">
                        <div class="content">
                            <h3 class="Info-card__title">{info.title}</h3>
                            <span class="Info-card__category">{info.description}</span>
                        </div>
                    </div>
                </div>
            )}
            </section>
        </main>
    );
}


export default InfoPage;