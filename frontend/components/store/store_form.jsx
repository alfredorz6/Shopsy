import React from 'react';


class StoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        let comp;
        if (this.props.formType === 'Update Store' ) {
            comp = ( <div>
                <h1>Update Store</h1>
                </div>)
        } else {
            comp = ( <div>
                    <h3>Welcome to Your Store Experience</h3>
                    <h3>Please create a New store to begin</h3>
                </div>
            )
        }
        
        return (
            <div>
                {comp}
                <form onSubmit={this.handleSubmit}>
                    
                    <label className='store-values'>
                    Store name
                    <p>Pick a name that reflects your style</p>
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={this.update('name')}
                    />
                    </label>
                    <label className='store-values'>
                    Description
                    <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                    />
                    <p>Please provide a small description about your store and the products you will be offering</p>
                    </label>
                    <button type='submit' value={this.props.formType}>{this.props.formType}</button> 
                </form>
            </div>
        );
    }

}

export default StoreForm;
