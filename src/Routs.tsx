import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./pages/main/Main"
import { Details } from './pages/details/Details'



export function Routs(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main /> } />
                <Route path="/detalhes/:id" element={ <Details /> } />
            </Routes>
        </BrowserRouter>
    )
}