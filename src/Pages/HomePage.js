
import { list } from "../Components/Cards/Cards-Description";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Multiple_Cards from "../Components/MovieList";

export function Homepage(){

    return(
        <div>
            <Header/>
            <Multiple_Cards list={list} /> 
            <Footer/>
        </div>

    );


}