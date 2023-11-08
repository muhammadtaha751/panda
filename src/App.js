import logo from './logo.svg';
import './App.css';
import Router from './config/router';
import { store } from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  </Provider>
  );
}

export default App;
