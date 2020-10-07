import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 
*/
             this.state={
                 name: "",
                 URL: "",
             }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <div>
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input type="text" value={this.state.name}/>
                <label>URL</label>
                <input type="text" value={this.state.URL}/>
            </form>
               <button>Submit</button>
            </div>
        );
    
    }
}

export default Form;
