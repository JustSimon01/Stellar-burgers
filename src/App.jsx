import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';



function App() {

  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  React.useEffect(() =>{
    const getData = () => {
      setState({ ...state, hasError: false, isLoading: true });
      fetch('https://norma.nomoreparties.space/api/ingredients')
        .then(res => res.json())
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
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
