import { Route, Routes } from "react-router-dom";
import LayoutFull from "./Views/LayoutFull";
import LayoutHalf from "./Views/LayoutHalf";
import LayoutSimple from "./Views/LayoutSimple";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Noticias from "./Views/Noticias";
import Cadastro from "./Views/Cadastro";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutFull />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<LayoutHalf />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<LayoutSimple />}>
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>

      <Route path="/noticias" element={<Noticias />} />
    </Routes>
  );
}

export default AppRoutes;
