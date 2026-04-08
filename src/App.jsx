import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./assets/Pages";
import Books from "./assets/Pages/books"; 
import Teams from "./assets/Pages/teams";
import Login from "./assets/Pages/auth/login";
import Register from "./assets/Pages/auth/register";
import Contacts from "./assets/Pages/contacts";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="teams" element={<Teams />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;