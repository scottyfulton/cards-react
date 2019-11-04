import React from 'react';

class PersonCard extends React.Component {
    constructor() {
        super();
        this.state = { 
            pictures: [],
            names: [],
         }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=3')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                        <p>
                        <div>{pic.name.first} {pic.name.last }</div>
                        <div>Age: {pic.dob.age}</div>
                        </p>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures)
        })
    }
    render() { 
        return ( 
            <div >
                <div>
                    {/* {this.state.names} */}
                    {this.state.pictures}
                </div>
            </div>

         );
    }
}
 
export default PersonCard;