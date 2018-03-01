function solve(commands, sortingCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let ticketsResult = [];
    for(let command of commands){
        let currentData = command.split('|');
        let currentTicket = new Ticket(currentData[0], Number(currentData[1]), currentData[2]);
        ticketsResult.push(currentTicket);
    }
    let sortedTickets = ticketsResult.sort((a,b) =>  {
        if(sortingCriteria == "price"){
            return a[sortingCriteria] - b[sortingCriteria]
        }
        return a[sortingCriteria].localeCompare(b[sortingCriteria])
    });

    return sortedTickets
}

console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));