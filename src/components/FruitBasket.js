import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     filters: [],
  //     selectedFilter: null
  //   };
  // }

  // render() {
  const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter 
          handleChange={props.handleFilterChange} 
          fetchFilters={props.fetchFilters} 
          filters={props.filters}
        />
        <FilteredFruitList
          filter={props.currentFilter}
          fruit={props.fruit}
          />
      </div>
    );
  }
//   }
// }

FruitBasket.defaultProps = {
  fruit: '',
  filters: [],
  currentFilter: '',
  updateFilterCallback: ''
}

export default FruitBasket;
