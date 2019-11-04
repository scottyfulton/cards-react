import React from 'react';
import Card from './Card';
import PersonCard from './PersonCard';

class DisplayWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards : Array(5).fill(null),
         };
    }

    handleClick(payload){
        const cards = this.state.cards.slice();
        cards[payload] = this.state.cards[0] != null ? "x" : "o";
        this.setState({
            cards: cards,
        });
    }

    renderCard(payload){
        return(
            <Card 
                data = {this.state.cards[payload]}
                onClick = {() => this.handleClick(payload)}
            />
        );
    }

    render() { 
        return (
            <div>
                {this.renderCard(0)}
                <PersonCard></PersonCard>
            </div>
          );
    }
}
 
export default DisplayWindow;