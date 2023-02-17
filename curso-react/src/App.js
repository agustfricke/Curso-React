import logo from './logo.svg';
import './App.css';

function App() {

  const handleRandomNumber = () => {
    let maxNum = 50;
    let randomNumber = Math.floor((Math.random() * maxNum) + 1);
    return randomNumber;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Random Number { handleRandomNumber() } !
        </p>
      </header>
    </div>
  );
}

export default App;
