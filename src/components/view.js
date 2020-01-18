import React from 'react';
import axios from 'axios';
import Header from './header/Header';
import Footer from './footer/Footer';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";

class view extends React.Component{

    state={
        data:[],
        image: [],
        geners: []
    }; 
    
    componentDidMount () {
        let id = (this.props.match.url).substr(6)
        axios.get(`http://api.tvmaze.com/shows/${id}`).then(res => {
            this.setState({data2: this.props})
            this.setState({data: res.data})
            this.setState({image: res.data.image})
            });
        }
        
    
    render(){
        return(
            <div className="App" >
                <Header />
                <Card style={{margin:50}}>
                    <img src={this.state.image.medium} alt=""></img>
                    <h3>Nom du film </h3> <h5>{this.state.data.name}</h5>
                    <a href={this.state.data.url}>Lien vers le site TVMAZE</a>
                    <h3>Statut </h3> <h5> {this.state.data.status}</h5>
                    <h3>Description </h3> <h5> {this.state.data.summary}</h5>
                </Card>
                <Footer />
            </div>        
        )
        }
    }

export default view;