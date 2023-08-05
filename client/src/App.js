import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState([]);


  const TodoHandler = (id)=>{
    console.log(id);
    window.open(`http://localhost:3000/user/todo/${id}`, '_self')
  }

  const fetchApi = async () => {
    try {
      const data = await fetch('http://localhost:8000/', {
        method: 'GET', headers: {
          'Type-Content': 'Application/json'
        }
      })

      const userDa = await data.json();

      console.log(userDa);
      setState(userDa);
    } catch (error) {

    }
  }
  useEffect(()=>{
    fetchApi();
  }, [])
  return (
    <div className="App">
      <h1 style={{paddingBottom: '20px'}}>Welcome Users</h1>
      <table className='table'>
        <tr className='table-head'>
          <th>SN</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Website</th>
        
          
        </tr>

        {
          state.map((data) => (
            <>
              <tr className='table-data'>
                <td >{data.id}</td>
                <td onClick={()=> TodoHandler(data.id)}>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
              </tr>
            </>
          ))
        }
      </table>


    </div>
  );
}

export default App;
