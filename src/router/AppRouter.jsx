import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/pages/Home";

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/*" element={ <Home /> } />
                {/* <Route path="/destination" element={ <Destination /> } />
                <Route path="/crew" element={ <Crew /> } />
                <Route path="/technology" element={ <Technology /> } /> */}
            </Routes>

        </BrowserRouter>
  )
}
