import React from 'react';
import SearchBar from './component/SearchBar';
import List from './component/List';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="App">
        <SearchBar />
        <List />
      </div>
    );
  }
}

export default App;
