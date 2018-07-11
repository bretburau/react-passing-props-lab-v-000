import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      items: []
    }
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => { //copied from Filter
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentWillMount = () => {
    console.log(this.state)
    this.fetchFilters();
    this.fetchFruit();
    console.log(this.state)
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    console.log(this.state)
    return(
      <FruitBasket 
        handleFilterChange={this.handleFilterChange}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruit={this.state.items}
      />
    )
  }
}

export default App;
