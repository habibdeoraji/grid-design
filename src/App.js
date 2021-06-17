import React, { Component } from 'react';
import TopBar from './components/TopBar';
import { courseDetailsArray as CardArray, filterCategoryArray as CategoryArray } from './commonData';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCardList: CardArray,
      filterIndex: 0
    }
  }

  onclickfilter = (item, id) => {
    let showCardList = CardArray.filter(course => course.filterCategory === item);
    this.setState({ filterIndex: id })

    if (item === "All") {
      this.setState({ showCardList: CardArray })
    } else {
      this.setState({ showCardList: showCardList })
    }

  }

  render() {

    const { filterIndex, showCardList } = this.state;
    return (<div style={{ margin: "0", backgroundColor: "#F2F6FF" }}>
      <TopBar />

      <div className="container filter">
        {CategoryArray.map((filter, id) => <button className={filterIndex === id ? "filterStyle active" : "filterStyle"} onClick={() => this.onclickfilter(filter, id)} key={id}>{filter}</button>)}
      </div>





      <div className="container">
        {showCardList.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div >);
  }
}

export default App;
