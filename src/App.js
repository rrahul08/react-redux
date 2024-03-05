import './App.css';
import Body from './Body';
import Header from './Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Cart from './Cart';



function App() {
  return (
    <>
    <BrowserRouter>
    < Provider store={store}>
    <div className="App">
     <Header/>
   
    <Routes>
            <Route path="/" element={<Body />}/>
            <Route path="/cart" element={<Cart />} />
         </Routes>
    </div>
    </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
