import logo from './logo.svg';
import './App.css';

function App() {
  let nama = "Zulfikharali Muzakir";
  let no_absen = 35;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nama : {nama} </p>
        <p>No. Absen : {no_absen}</p>
      </header>
    </div>
  );
}

export default App;
