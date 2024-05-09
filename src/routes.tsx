import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";


const Rotas = () => (
    <Routes>
        <Route path= '/' element= {<Home></Home>}></Route>
        <Route path= '/perfil/:id' element= {<Perfil></Perfil>}></Route>
    </Routes>
        
)

export default Rotas