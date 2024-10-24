import SearchBar from "../Components/SearchBar";
import { list } from "../Components/Cards/Cards-Description";
import Footer from "../Components/Footer";

import Multiple_Cards from "../Components/MovieList";

export function Homepage(){

    return(
        <div>
            <SearchBar/>
            <Multiple_Cards list={list} /> 
            <Footer/>
        </div>

    );


}