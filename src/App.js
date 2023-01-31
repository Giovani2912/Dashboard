import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import "./style/dark.scss";
function App() {

  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home /> } /> 
            <Route path="login" element={<Login /> } /> 
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              </Route>
            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />          
              </Route>
          </Route>

        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
