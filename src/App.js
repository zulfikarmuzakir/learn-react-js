import React from 'react';
import logo from './logo.svg';
import './App.css';

// menggunakan function App
function App() {
  let nama = "Zulfikharali Muzakir";
  let no_absen = 35;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Function App</h1>
        <p>Nama : {nama} </p>
        <p>No. Absen : {no_absen}</p>
      </header>
    </div>
  );
}

// Menggunakan variabel
const AppVar = () => {
  let nama = "Zulfikharali Muzakir";
  let no_absen = 35;

  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AppVar</h1>
        <p>Nama : {nama} </p>
        <p>No. Absen : {no_absen}</p>
      </header>
    </div>
  );
};

// Menggunakan class
class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Zulfikharali Muzakir",
      no_absen: 35,
    };
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AppClass</h1>
        <p>Nama : {this.state.nama}</p>
        <p>No. Absen : {this.state.no_absen}</p>
      </header>
    </div>
    );
  }
}

export { App, AppVar, AppClass };
