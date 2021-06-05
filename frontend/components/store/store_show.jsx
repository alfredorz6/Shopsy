import React from 'react';

class StoreShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchStore(this.props.storeId);
    }

    render() {
        const { store } = this.props;
        let component;
        
        if (store) {
            component = <div>
                <h1>{store.name}</h1>
                <h3>{store.owner.name}</h3>
                <p>{store.description}</p>
            </div>
        } else {
            <p> loading... </p>
        }

        return (
            <div>
                {component}
            </div>
        );
    }
}

export default StoreShow;