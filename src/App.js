import React, { Component } from 'react';
import TopBar from './components/TopBar';
import { courseDetailsArray as CardArray, filterCategoryArray as CategoryArray } from './commonData';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Filter from './components/Filter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (<div style={{ margin: "0", backgroundColor: "#F2F6FF" }
    }>
      <TopBar />
      <div className="container filter">{CategoryArray.map((filter, index) => <Filter filter={filter} index={index} />)}</div>
      <div className="container">
        {CardArray.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div >);
  }
}

export default App;
