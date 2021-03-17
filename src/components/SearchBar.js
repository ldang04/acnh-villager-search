import './SearchBar.css';
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            villager: '', // user input
            filteredOptions: [],
            showOptions: false
        }
        this.wrapperRef = React.createRef();
    }

    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (e) => {
        if(this.wrapperRef && !this.wrapperRef.current.contains(e.target)){
            this.setState({showOptions: false})
        }
    }

    onInputChange = e => {
        const options = this.props.options;
        let value = e.target.value
        if (value.length == 0){
            this.setState({villager: value});
        } else {
            let edited = value[0].toUpperCase() + value.slice(1).toLowerCase();
            const filteredOptions = options.filter(
                (option) => 
                option.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
            this.setState({
                villager: edited,
                filteredOptions,
                showOptions: true
            });
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.villager);
    }

    render(){
        let optionList;
        if (this.state.showOptions){
            if (this.state.showOptions && this.state.villager){
                if(this.state.filteredOptions.length){
                    optionList = (
                        <ul className="options">
                            {this.state.filteredOptions.map((optionName) => {
                                let className;
                                return(
                                    <li key={optionName} onClick={ (e) => {
                                        this.props.onFormSubmit(optionName)
                                        this.setState({showOptions: false});
                                        }}>
                                        {optionName}
                                    </li>
                                );
                            })}
                        </ul>
                    );
                } 
            }
        }

        return (
            <div ref={this.wrapperRef}>
                <div className="input-group">
                    <form onClick={e => this.setState({showOptions: true})} onSubmit={this.onFormSubmit}>
                        <input 
                        type="text" 
                        onChange={this.onInputChange} 
                        className="form-control mt-3" 
                        placeholder="Search for a villager..." />                
                    </form>
                </div>
                <div className="options-div">
                    {optionList} 
                </div>    
            </div>
        )
    }
}


export default SearchBar