import React from 'react';
import {connect} from 'react-redux';
import ProductIndexItem from '../products/product_index_item';

class SearchShowContainer extends React.Component {
  constructor(props) {
    super(props);

  }

    render() {
        
        const query = this.props.searchItems[0];
        if (typeof query === "string") {
            return (
                <main>
                <div className="cant-find-box">
            
                    <div>"{query}" not found!</div> 
                    
                    <div className="cant-find"></div>
                </div>
                </main>
            );
        } else {

            return (
                <main>
                <div className="list-box">
                    <ul className="items-list">
                        {this.props.searchItems.map(product => <ProductIndexItem product={product} key={product.id} />
                        )}
                    
                    </ul>
                </div>
                </main>
            );
        }
    }
}




const msp = state => {
  return {
    searchItems: Object.values(state.entities.products)
  };
};


export default connect(msp, null)(SearchShowContainer);