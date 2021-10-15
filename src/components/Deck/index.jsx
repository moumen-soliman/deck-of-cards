import React from 'react';
import {cardsArr,  cardsSuits} from '../../constants';
import {CardsContainer, CardHolder, CardNumber, CardVal, CardSuit, Button } from './Deck.styled';

export default class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardDecks: []
        }
    }

    // Get Card Decks and generate the cardDeck List
    getCardDecksArr() {
        let cardDecksData = [];
        for (const elementSuit of cardsSuits) {
            for (const elementCard of cardsArr) {
                cardDecksData.push({
                    suit: elementSuit,
                    card: elementCard
                })
            }
        }
        this.setDeckData(this.getShuffeld(cardDecksData))
    }

    // Shuffle Function
    shuffleArr() {
        const { cardDecks } = this.state;
        this.setDeckData(this.getShuffeld(cardDecks))    
    }

    // Get Shuffled function
    getShuffeld(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    // Set Data into cardDecks Function
    setDeckData(data) {
        this.setState({
            cardDecks: data
        });
    }
    
    componentDidMount() {
        this.getCardDecksArr()
    }

    render() {
        const { cardDecks } = this.state;
        return (
            <>
                <Button onClick={() => this.shuffleArr()}>Shuffle</Button>
                <CardsContainer>
                    {cardDecks.map(({suit, card}, index) => 
                        <CardHolder currentSuit={suit} key={index}>
                            <CardNumber position={'top'}>
                                <CardVal>{card}</CardVal>
                                <CardSuit>{suit}</CardSuit>
                            </CardNumber>
                            <CardNumber position={'center'}>
                                {suit}
                            </CardNumber>
                            <CardNumber position={'bottom'}>
                                <CardVal>{card}</CardVal>
                                <CardSuit>{suit}</CardSuit>
                            </CardNumber>
                        </CardHolder>
                    )}
                </CardsContainer>
            </>
        )
    }
}