function printDeckOfCards(cards) {
    let deck = [];
    for (let cardStr of cards) {
        let face = cardStr.substring(0, cardStr.length-1);
        let suit = cardStr.substr(cardStr.length-1, 1);
        try {
            deck.push(new Card(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + cardStr);
            return;
        }
    }
    console.log(deck.join(' '));
}