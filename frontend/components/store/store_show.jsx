import React from 'react';




class StoreShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchStore(this.props.match.params.storeId);
    }

    render() {
        debugger
        const { store } = this.props;

        return (
            <div>
                <h1>{store.name}</h1>
                <h3>{store.owner.id}</h3>
                <p>{store.description}</p>
                
            </div>
        );
    }
}

export default StoreShow;