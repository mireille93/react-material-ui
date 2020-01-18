import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
class Search extends Component {
    state={
        searchText: '',
        amount: 0,
        apiUrl:'http://api.tvmaze.com/shows?',
        data:[]
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => { 
            if(val === ''){
                this.setState({data: []});
            } else {
           axios
             .get(
                 `${this.state.apiUrl}q=${this.state.searchText}&page=${this.state.amount}`
                 )
                    .then (res => this.setState({data: res.data}))
                    .catch(err => console.log(err));

            }
        });
    };

    onAmountChange=(e, index, value) => this.setState({ amount: value});
    
    render() {
        return (
            <div>
                
                <TextField style={{width:350, marginLeft:350}}
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Recherchez votre film ou serie preferé"
                    fullWidth={true}
                />
                <br/>

                {this.state.data.length > 0 ? (<ImageResults data={this.state.data}/>) : <h3 style={{textAlign: 'center', cursor: 'none'}}>Quel film recherchez-vous?</h3>}
            </div>
        )
    }
}

export default Search;