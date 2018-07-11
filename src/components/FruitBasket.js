import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null
    };
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter 
          handleChange={this.props.handleFilterChange} 
          fetchFilters={this.props.fetchFilters} 
          filters={this.props.filters}
        />
        <FilteredFruitList
          filter={this.props.currentFilter}
          fruit={this.props.fruit}
          />
      </div>
    );
  }
}

FruitBasket.defaultProps = {
  fruit: '',
  filters: [],
  currentFilter: '',
  updateFilterCallback: ''
}

export default FruitBasket;
