function getDates(input) {
    let pattern = /\b[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}\b/g;
    let dates = [];
    for(let currentSentence of input) {
        str = "";
        let match = pattern.exec(currentSentence);
        while(match) {
            let dateParams = match[0].split('-');
            dates.push(match[0].toString()+` (Day: ${dateParams[0]}, Month: ${dateParams[1]}, Year: ${dateParams[2]})`);

            match = pattern.exec(currentSentence);
        }
    }
    console.log(dates.join("\n"));
}
function extractDates(input) {
    let pattern = /\b((([12][0-9])|(3[01])|(0?[1-9]))-[a-zA-Z]{3}-\d{4})\b/g;
    let match = pattern.exec(input);
    let dates = [];

    while (match != null) {
        let dateElements = match[1].split('-');
        let currentDate = {
            date: match[1],
            day: dateElements[0],
            month: dateElements[1],
            year: dateElements[2]
        };

        dates.push(currentDate);

        match = pattern.exec(input);
    }

    dates.forEach(d => console.log(`${d.date} (Day: ${d.day}, Month: ${d.month}, Year: ${d.year})`));
}
getDates(["I am born on 30-Dec-1994. 20-Jun-2000",
"My father is born on the 29-Jul-1955.",
"1-July-2000 is not a valid date."]);