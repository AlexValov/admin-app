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

  // const carsData = [
  //   { id: 1, name: 'Ford', price: 10000, description: "Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
  //   { id: 2, name: 'Ford2', price: 100002, description: "2Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
  //   { id: 3, name: 'Opel', price: 10220, description: "Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации" },
  // ]


  // используем useState хук
  // в качестве начальных данных, передаем usersData
  // в users будем хранить пользователей, как будто это state.users
  // setUsers - это функция, как будто this.setState({ users: ... })
  // const [cars, setCars] = useState(carsData)


  // функция добавления пользователя
  // const addCar = car => {
  //   // создаем id значением на 1 больше (автоинкремент)
  //   car.id = cars.length + 1
  //   // вызываем setUsers определенную выше в хуке useState
  //   // передаем туда все, что было в users + новый элемент user

  //   setCars([ ...cars, car ])
  // }



  return (
    <main className="layout">
      <Provider store={store}>
        <Route path='/' exact render={()=> <h1>Home page</h1>} />
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/item-list' component={ListItems} />
        <Route path='/item-card/:id' component={ItemCard} />
        <Route path='/add-item' component={AddItem} />
      </Provider>
    </main>
  );
}

export default App;
