import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/pages/Home";
import { Destination } from "../destination/pages/Destination";
import { Crew } from "../crew/pages/Crew";
import { Technology } from "../technology/pages/Technology";

export const AppRouter = () => {
    return (
        <HashRouter>
        {/* <BrowserRouter> */}

            <Routes>
                <Route path="/home" element={ <Home /> } />
                <Route path="/destination" element={ <Destination /> } />
                <Route path="/crew" element={ <Crew /> } />
                <Route path="/technology" element={ <Technology /> } />
                <Route path="/*" element={ <Home /> } />
            </Routes>

        {/* </BrowserRouter> */}
        </HashRouter>
  )
}
