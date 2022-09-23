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
                    <p className="card-SuperPower" > {this.props.SuperPower} </p>
                    <p className="card-AddInfo" > {this.props.AddInfo} </p>
                </div>
                <div className="card-footer" >
                    <span className="card-alter_ego" > $ {this.props.alter_ego} </span>
                    <span className="card-work" > $ {this.props.work} </span>
                    <span className="card-friends" > $ {this.props.friends} </span>
                </div>
            </div>
        );
    }
}

export default Heroes