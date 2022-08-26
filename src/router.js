import { BrowserRouter , Route , Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from './pages/moviePage';
import SeriesPage from "./pages/seriesPage";
import CategoryPage from "./pages/categoryPage";
import LatestPage from "./pages/latestPage";
import KidsPage from "./pages/kidsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movie" element={<MoviePage/>}></Route>
        <Route path="/series" element={<SeriesPage/>}></Route>
        <Route path="/category" element={<CategoryPage/>}></Route>
        <Route path="/latest" element={<LatestPage/>}></Route>
        <Route path="/kids" element={<KidsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
