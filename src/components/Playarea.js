import {Component} from 'react';
import {Card, Button} from 'antd';
import {GiSpades, GiHearts, GiDiamonds, GiClubs} from 'react-icons/gi';

class Playarea extends Component {
  state = {
    cards: [
      {id: '1', value: 'A', suit: 'H'},
      {id: '2', value: '2', suit: 'H'},
      {id: '3', value: '3', suit: 'H'},
      {id: '4', value: '4', suit: 'H'},
      {id: '5', value: '5', suit: 'H'},
      {id: '6', value: '6', suit: 'H'},
      {id: '7', value: '7', suit: 'H'},
      {id: '8', value: '8', suit: 'H'},
      {id: '9', value: '9', suit: 'H'},
      {id: '10', value: '10', suit: 'H'},
      {id: '11', value: 'J', suit: 'H'},
      {id: '12', value: 'Q', suit: 'H'},
      {id: '13', value: 'K', suit: 'H'},
      {id: '14', value: 'A', suit: 'S'},
      {id: '15', value: '2', suit: 'S'},
      {id: '16', value: '3', suit: 'S'},
      {id: '17', value: '4', suit: 'S'},
      {id: '18', value: '5', suit: 'S'},
      {id: '19', value: '6', suit: 'S'},
      {id: '20', value: '7', suit: 'S'},
      {id: '21', value: '8', suit: 'S'},
      {id: '22', value: '9', suit: 'S'},
      {id: '23', value: '10', suit: 'S'},
      {id: '24', value: 'J', suit: 'S'},
      {id: '25', value: 'Q', suit: 'S'},
      {id: '26', value: 'K', suit: 'S'},
      {id: '27', value: 'A', suit: 'D'},
      {id: '28', value: '2', suit: 'D'},
      {id: '29', value: '3', suit: 'D'},
      {id: '30', value: '4', suit: 'D'},
      {id: '31', value: '5', suit: 'D'},
      {id: '32', value: '6', suit: 'D'},
      {id: '33', value: '7', suit: 'D'},
      {id: '34', value: '8', suit: 'D'},
      {id: '35', value: '9', suit: 'D'},
      {id: '36', value: '10', suit: 'D'},
      {id: '37', value: 'J', suit: 'D'},
      {id: '38', value: 'Q', suit: 'D'},
      {id: '39', value: 'K', suit: 'D'},
      {id: '40', value: 'A', suit: 'C'},
      {id: '41', value: '2', suit: 'C'},
      {id: '42', value: '3', suit: 'C'},
      {id: '43', value: '4', suit: 'C'},
      {id: '44', value: '5', suit: 'C'},
      {id: '45', value: '6', suit: 'C'},
      {id: '46', value: '7', suit: 'C'},
      {id: '47', value: '8', suit: 'C'},
      {id: '48', value: '9', suit: 'C'},
      {id: '49', value: '10', suit: 'C'},
      {id: '50', value: 'J', suit: 'C'},
      {id: '51', value: 'Q', suit: 'C'},
      {id: '52', value: 'K', suit: 'C'},
    ],
    drawncards: [],
  }

  getRandomNumber = (remove) => {
    let num = Math.floor(Math.random() * (this.state.cards.length));
    return (remove.includes(num) && remove.length < this.state.cards.length) ? this.getRandomNumber(remove) : num;
  }

  handleCardDraw = () => {
    let k = 0, drawncards = [...this.state.drawncards], cards = [], drawncard, remove = [];
    for(let i = 0; i < 5 ; i++) {
      if(this.state.cards.length === 0) {
        break;
      }
      k = this.getRandomNumber(remove);
      remove.push(k);
    }
    drawncard = this.state.cards.filter((card, index) => remove.includes(index));
    cards = this.state.cards.filter((card, index) => !remove.includes(index));
    drawncard.forEach((card, index) => {
      drawncards.push(card);
    })
    this.setState({...this.state, cards: cards, drawncards: drawncards});
  }

  render () {
    return (
      <>
        <div>
          <Button type="primary" disabled={this.state.cards.length === 0} className="margin" onClick={this.handleCardDraw}>Draw Cards</Button>
        </div>
        {this.state.drawncards.map((card, index) => {
          return (
            <Card style={{width: 150, margin: '5px'}} className="mycard" key={index}>
              <span className={`${card.suit === 'C' || card.suit === 'S' ? 'black' : 'red'}`}>
                {card.value}
                {card.suit === 'H' ? <GiHearts style={{verticalAlign: 'middle'}}/> : card.suit === 'D' ? <GiDiamonds style={{verticalAlign: 'middle'}}/> : card.suit === 'S' ? <GiSpades style={{verticalAlign: 'middle'}}/> : <GiClubs style={{verticalAlign: 'middle'}}/>}
              </span>
            </Card>
          )
        })}
      </>
    );
  }
}

export default Playarea;
