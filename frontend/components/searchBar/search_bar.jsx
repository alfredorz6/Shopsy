import React from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import {fetchSearchProduct} from '../../actions/product_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '' 
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ query: e.target.value });
  }



  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchProduct(this.state.query).then(() => {
      this.props.history.push('/search');
    });
  }

  render() {
    return (
      <form className="searchform" onSubmit={this.onFormSubmit} >
      <div className="searchbox">
        <input
          placeholder="Search for items"
          className="search-field"
          value={this.state.query}
          onChange={this.onInputChange} />

        <span className="outer-search">
          <button type='submit' className="search-button"><FaSearch/></button>
        </span>
        </div>
      </form>
    );
  }
}


const mstp = (state) => {
  return {
    products: Object.values(state.entities.products)
  };
};


const mdtp = dispatch => {
  return {
    fetchSearchProduct: query => dispatch(fetchSearchProduct(query))
  };
};


export default withRouter(connect(mstp, mdtp)(SearchBar));