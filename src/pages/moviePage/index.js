import RegularMovieList from '../../components/regularMovieList'
import { special, trueStory , namavaDub} from '../../components/data';
import MainLayout from '../../components/layouts/mainLayout';
import changeTitle from "../../utils/changeTitle";
import { useEffect } from 'react';

export default function MoviePage(){
    useEffect(function(){
        document.body.classList.remove("whiteBg")
    })
    useEffect(function(){
        changeTitle("فیلم")
    })
    return(
        <MainLayout>
            <div className="containerFull">
                <RegularMovieList listName={trueStory} title="بر اساس داستان واقعی"/>
                <RegularMovieList listName={namavaDub} title="دوبله نماوا"/>
                <RegularMovieList listName={special} title="ویژه"/>
            </div>
        </MainLayout>
    )
}