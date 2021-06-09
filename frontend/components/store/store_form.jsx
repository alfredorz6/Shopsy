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
        let {errors} = this.props
        let comp;
        if (this.props.formType === 'Update Store' ) {
            comp = ( <div className='store-greeting'>
                <h1>Update Store</h1>
                </div>)
        } else {
            comp = ( <div className='store-greeting'>
                    <h3>Welcome to Your Store Experience</h3>
                    <h3>Please create a New store to begin</h3>
                </div>
            )
        }
        
        return (
            <div className='store-form'>
                {comp}
                
                <form onSubmit={this.handleSubmit}>
                    <div className='store-keys'>
                        <label className='store-values'>
                        <h2>Store name</h2>
                        <input className='store-form-input-name'
                            type='text'
                            value={this.state.name}
                            onChange={this.update('name')}
                        />
                        <p className='store-key-info'>Pick a name that reflects your style</p>
                        </label>
                    </div>
                    <br/>
                    <div className='store-keys'>
                        <label className='store-values'>
                        <h2>Description</h2>
                        <textarea className='store-form-input'
                            value={this.state.description}
                            onChange={this.update('description')}
                            cols='30' rows='10'
                        />
                        <p className='store-key-info'>Please provide a small description about your store and the products you will be offering</p>
                        </label>
                    </div>
                    <br/>
                    <button className='submit-store-form' type='submit' value={this.props.formType}>{this.props.formType}</button> 
                </form>
            </div>
        );
    }

}

export default StoreForm;
