import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux'
import './App.css';
import {Route} from 'react-router-dom'
import ItemCard from './Components/Items/ItemCard/ItemCard'
import Login from './Components/Auth/Login/Login';
import ListItems from './Components/Items/ListItems/ListItems';
import SignUp from './Components/Auth/SignUp/SignUp';
import AddItem from './Components/Items/AddItem/AddItem'

function App() {
  
  return (
    <main className="layout">
      <Provider store={store}>
        <Route path='/' exact render={()=> <h1>Home page</h1>} />
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/item-list' component={ListItems} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/item-card/:id'  component={ItemCard} />
      </Provider>
    </main>
  );
}

export default App;
