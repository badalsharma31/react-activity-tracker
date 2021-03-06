import React, {useEffect, useState} from 'react';
import Persons from './components/ui/persons';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [items, setItems] = useState([]);
  let [isLoading, setIsLoading] = useState(true); 

  useEffect( () => {
    async function fetchData() {
        const result = await Axios(
        `https://5f19a5fde104860016baf19e.mockapi.io/api/users`
        );
        setItems(result.data.members);
        setIsLoading(false);
    }
    fetchData();
  }, []);

  items.map((person) => {
    return (<div
      key={person.id}>
        {person.real_name} 
    </div> )
  });

  return (
    <div className="App">

      <Persons items={items}  isLoading={isLoading}></Persons>

    </div>
  );
}

export default App;
