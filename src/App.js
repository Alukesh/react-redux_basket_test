import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Basket from "./pages/Basket/Basket";
import Import from "./pages/Import/Import";


function App() {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   navigate('page1')
  // },[])
  return (
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route path="" element={<Basket/>}/>
      </Route>
      
      <Route path="/page2" element={<Import/>}/>

    </Routes>
  );
}

export default App;
