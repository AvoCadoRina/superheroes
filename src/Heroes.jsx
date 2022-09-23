import React from 'react';
import './Heroes.css';

class Heroes extends React.Component {
    render() {
        return (
            <div className="card" >
                <div className="card-body" >
                    <img src={this.props.Photo}
                        alt={this.props.name} />
                    <h4 className="card-name" > {this.props.name} </h4>
                    <p className="card-world" > {this.props.world} </p>
                    <p className="card-SuperPower" > Суперсила: {this.props.SuperPower} </p>
                    <p className="card-alter_ego" > Альтер эго: {this.props.alter_ego} </p>
                    <p className="card-work" > Работа: {this.props.work} </p>
                    <p className="card-friends" > Друзья: {this.props.friends} </p>
                    <p className="card-AddInfo" > {this.props.AddInfo} </p>
                </div>
            </div>
        );
    }
}

export default Heroes