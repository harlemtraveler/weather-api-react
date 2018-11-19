import React, { Component } from 'react';

const Weather = props => (
    <div className="weather_info">
        { 
            props.city && props.country && <p className="weather_key"> Location:
                <span> { props.city }, { props.country } </span>
            </p>
        }
        { 
            props.temperature && <p className="weather_key"> Temperature: 
                <span> { props.temperature } </span>
            </p> 
        }
        { 
            props.humidity && <p className="weather_key"> Humidity:
                <span> { props.humidity } </span>
            </p> 
        }
        { 
            props.description && <p className="weather_key"> Conditions:
                <span> { props.description } </span>
            </p> 
        }
        { 
            props.error && <p className="weather_error">{ props.error }</p> 
        }
    </div>
);

// class Weather extends Component {
//     render() {
//         return (
//             <div>
//                 { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
//                 <br />
//                 { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
//                 <br />
//                 { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
//                 <br />
//                 { this.props.description && <p>Conditions: { this.props.description }</p> }

//                 { this.props.error && <p>{ this.props.error }</p> }
//             </div>
//         );
//     }
// };

export default Weather;