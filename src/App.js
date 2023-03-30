import "./App.css";
import { Route,Routes } from "react-router-dom";
//import Home from "./components/Home";
//import Todo from "./components/Todo";
import Calendar from "./Pages/Calendar";
import Homepage from "./Pages/Homepage";
import Todaypage from "./Pages/Todaypage";
import Todopage from "./Pages/Todopage";
function App() {
  return (
    <Routes>
      <Route exect path="/" element={<Homepage/>}/>
      <Route path="/todo" element={<Todopage/>}/>
      <Route path="/today" element={<Todaypage/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
     

    </Routes>
  );
}

export default App;