import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './App.css'

export default function Todo(){
    const [stateTodo, setStateTodo] = useState([])
   
    const fetchApi = async () => {
        try {
            const path = window.location.href.slice('/');
            const id = path[path.length-1];

          const data = await fetch(`http://localhost:8000/user/todo/${id}`, {
            method: 'GET', headers: {
              'Type-Content': 'Application/json'
            }
          })
    
          const userDa = await data.json();
    
          console.log(userDa, id);
          setStateTodo(userDa);
        } catch (error) {
    
        }
      }
      useEffect(()=>{
          fetchApi();
      },[])
    
    return (<>
    <div className="todo">
    <h1 style={{paddingBottom: '20px'}}>Todo of {stateTodo[0]?.userId} User</h1>
    <table className='table' style={{width: '800px'}}>
        <tr className='table-head' style={{backgroundColor: ''}}>
          <th>SN</th>
          <th>Title</th>
        <th>completed</th>
        </tr>

        {
          stateTodo.map((data, i) => (
            <>
            {console.log(data.completed)}
              <tr key={data.id}  style={data.completed? {backgroundColor:'white'} : {backgroundColor: 'rgb(218, 218, 218)'}} className='table-data'>
                <td >{i+1}</td>
                <td >{data.title}</td>
                <td>{data.completed ? 'True' : 'False'}</td>
              </tr>
            </>
          ))
        }
      </table>
      </div>
    </>)
}