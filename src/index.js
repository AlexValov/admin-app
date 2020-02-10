import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

class dbService {

    _apiBase= 'http://localhost:3000';
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    }

    getAllCar(){
        return this.getResourse(`/carsData`)
    }
    getCar(id){
        return this.getResourse(`/carsData/${id}/`)
    }
}

const jsonApi = new dbService();
jsonApi.getCar(2).then((car) => {
   
        console.log(car.name)
  
})


        // fetch('http://localhost:3000/carsData')
        // .then((res) => {
        //     return res.json();
        // })
        // .then((body) => {
        //     console.log(body)
        // })




        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();


