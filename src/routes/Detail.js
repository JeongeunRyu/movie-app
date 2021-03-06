import React from 'react';
import './Detail.css'
class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/")
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div className="detail_container">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <div className="title">{location.state.title}</div>
                <div>{location.state.summary}</div>
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default Detail