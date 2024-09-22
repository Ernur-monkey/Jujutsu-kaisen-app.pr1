import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingPost from "../components/LoadingPost";
import LoadingRow from "../components/LoadingRow";
import Error from "../components/Error";

function MenuPage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        async function fetchMenu() {
            try {
                setIsLoading(true)
                const response = await axios.get(`https://81331b4f5d461397.mokky.dev/menu`);
                setCategories(response.data);
            } catch(e) {
                setIsError(true)
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMenu();
    }, []);


    if (isError) {
        return <Error />
    }


    return (
        <section class="mobile-block-head">
            <div class="mobile-block_header is-sun">
                Меню
            </div> 
            {isLoading ? (<LoadingRow />) :(
                        <div class="Menus">
                           <div class="Menu-card">
                               <Link to="/" class="content">
                                    <div class="Menu-cont-card is-gojo">
                                        <h3 class="Base-card__title">Магическа Битва</h3>
                                   </div>
                               </Link>
                               {categories.map((category) => (
                                             <Link to="/category/posts">
                                                <div class="Menu-cont-card is-mahito">
                                                     <h3 class="Base-card__title">Магический Мир</h3>
                                                 </div>
                                            </Link>
                               ))}
                           </div>
                        </div> 
            )}  
        </section>
    );
}



export default MenuPage;