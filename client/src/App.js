
import { useEffect , useState} from "react";
import Header from "./components/Header"

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";


const App = (liquorCount) => {
  const [liquor, setLiquor] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(()=>{
    fetch("/liquors")
    .then((r)=>r.json())
    .then(setLiquor)
    // 
    // setLiquor
    // 
},[])

  function handleAddLiquor(addedLiquor) {
    setLiquor((liquor) => [...liquor, addedLiquor]);
  }

  function handleUpdateLiquor(updatedLiquor) {
    setLiquor((liquor) =>
      liquor.map((liquor) => {
        return liquor.id === updatedLiquor.id ? updatedLiquor : liquor;
      })
    );
  }

  function handleDeleteLiquor(deletedLiquor) {
    setLiquor((liquor) =>
      liquor.filter((liquor) => liquor.id !== deletedLiquor.id)
    );
  }

  return (
    <>
    
      <Header liquorCount={liquor.length} user={user} setUser={setUser} /> 
     {user ? (
      <Routes>
       <Route exact path="/" element={<Home onAddLiquor={handleAddLiquor} liquor={liquor} onUpdateLiquor={handleUpdateLiquor} onDeleteLiquor={handleDeleteLiquor}/>} />
       </Routes>
     )
     :
     (
      <Routes>
    {/* <Route exact path="/" element={<Home />} /> */}
    <Route exact path="/signin" element={<Signin setUser={setUser}/>} />
    <Route exact path="/register" element={<Register/>} />
    
  
  </Routes> 
     )
    }


    </>
  )
 }
  export default App