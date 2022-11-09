import React, {useState, useEffect} from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';



function App() {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() =>{
    const getData = () => {
      setState({ ...state, hasError: false, isLoading: true });
      fetch('https://norma.nomoreparties.space/api/ingredients')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then(({data}) => setState({ ...state, data, isLoading: false }))
        .catch(e => {
          setState({ ...state, hasError: true, isLoading: false });
        });
    };
     
     getData();
     
   }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className='App-main'>
        <BurgerIngredients data={state.data}/>
        <BurgerConstructor data={state.data}/>
      </main>
    </div>
  );
}

export default App;
