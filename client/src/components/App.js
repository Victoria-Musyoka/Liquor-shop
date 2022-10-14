// import { useEffect , useState} from "react";
// import Header from "./Header";
// import NewLiquorForm from "./NewLiquorForm";
// import LiquorItem from "./LiquorItem";
// import Home from "../pages/Home";
// import Signin from "../pages/Signin";
// import Register from "../pages/Register";
// import { Route, Routes } from "react-router-dom";


// const App = () => {
//   const [liquor, setLiquor] = useState([]);

 

//   useEffect(()=>{
//     fetch("/liquors")
//     .then((r)=>r.json())
//     .then(setLiquor)
//     // (data)=>console.log(data)
// },[])

//   function handleAddLiquor(addedLiquor) {
//     setLiquor((liquor) => [...liquor, addedLiquor]);
//   }

//   function handleUpdateLiquor(updatedLiquor) {
//     setLiquor((liquor) =>
//       liquor.map((liquor) => {
//         return liquor.id === updatedLiquor.id ? updatedLiquor : liquor;
//       })
//     );
//   }

//   function handleDeleteLiquor(deletedLiquor) {
//     setLiquor((liquor) =>
//       liquor.filter((liquor) => liquor.id !== deletedLiquor.id)
//     );
//   }

//   return (
//     <>
    
//       <Header liquorCount={liquor.length} /> 
//       <main>
//         <NewLiquorForm onAddLiquor={handleAddLiquor} />
//           <section className="liquor-list"> 
//           {liquor.map((liquor) => (
//             <LiquorItem
//               key={liquor.id}
//               liquor={liquor}
//               onUpdateLiquor={handleUpdateLiquor}
//               onDeleteLiquor={handleDeleteLiquor}
//             /> 
//           ))}
//         </section>
//       </main>

//       <Routes>
//     <Route exact path="/" element={<Home/>} />
//     <Route exact path="/signin" element={<Signin/>} />
//     <Route exact path="/register" element={<Register/>} />
  
//   </Routes>
//     </>
//   )
//           }
//   export default App