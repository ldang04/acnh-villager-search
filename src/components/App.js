import React from 'react';
import SearchBar from './SearchBar';
import villagers from '../apis/instafluffapi';
import VillagerCard from './VillagerCard';
import axios from 'axios';

class App extends React.Component {
state = {currentVillager: '', name:'', notFound: false, suggestions: []}

    async componentDidMount(){
        try{
            const suggestions = await axios.get('https://acnhapi.com/v1/villagers');
            const data = Object.values(suggestions.data);
            data.forEach(value => {
                this.state.suggestions.push(value.name['name-USen']);
            });
        } catch(error) {
            console.log('something went wrong', error);
        }
    }

   onVillagerSubmit = async (villager) => {
       try {
           const response = await villagers.get(`/${villager}.json`)
           console.log(response);
         this.setState({ currentVillager: response.data, name: response.data.name['US-en'], notFound: false});
       } catch (error) {
           this.setState({ notFound: true });
       }
    }
   
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-0 col-md-2">

                    </div>
                    <div className="col-12 col-md-8">
                        <SearchBar 
                        options={this.state.suggestions} 
                        onFormSubmit={this.onVillagerSubmit}
                        />
                        <VillagerCard 
                        villager={this.state.currentVillager} 
                        name={this.state.name} 
                        notFound={this.state.notFound} 
                        />
                    </div>
                    <div className="col-0 col-md-2">

                    </div>
                </div>
            </div>
        )
    }
}


export default App

