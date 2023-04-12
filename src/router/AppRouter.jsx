import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/pages/Home";
import { Destination } from "../destination/pages/Destination";
import { Crew } from "../crew/pages/Crew";
import { CrewTest } from "../crew/pages/CrewTest";

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/*" element={ <Home /> } />
                <Route path="/destination" element={ <Destination /> } />
                <Route path="/crew" element={ <CrewTest /> } />
                {/* <Route path="/technology" element={ <Technology /> } /> */}
            </Routes>

        </BrowserRouter>
  )
}
