import Axios from 'axios';
import { useState, useEffect } from 'react';
import UserList from './Components/UserList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './Components/User';
import './App.css';

function App() {
  const [loadUsers, setLoadUser]=useState(true);
  const [users, setUsers]=useState([]);

  const getUsers = () => {
      Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data)
        setLoadUser(false)
      } )
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        
          <Route exact path="/" render={() =>
            <UserList users={users} loadUsers={loadUsers} /> 
          } />
          <Route path="/users/:id" component={User} />
        
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
