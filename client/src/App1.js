import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./todo";




export default function App1(){
    return (<>
    <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<App />}/>
        <Route path="/user/todo/:id" element={<Todo /> }/>
    </Routes>
    </BrowserRouter>
        
    </>)
}