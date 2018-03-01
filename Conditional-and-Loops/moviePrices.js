function moviePrices ([movie, day]){
    movie = movie.toLowerCase();
    day = day.toLowerCase();
    let price = 0;

    if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day ==  "friday"){
        if (movie == "schindler's list")
            price = 8.50;
        else if ( movie == "casablanca")
            price = 8;
        else if (movie == "the wizard of oz")
            price = 10;
    }
    else if (day == "saturday" || day == "sunday") {
        if (movie == "schindler's list")
            price = 15;
        else if ( movie == "casablanca")
            price = 10;
        else if (movie == "the wizard of oz")
            price = 15;
    }

    if(movie == "the godfather") {
        if( day == "monday")
            price = 12;
        else  if (day == "tuesday")
            price = 10;
        else if ( day =="wednesday" || day == "friday")
            price = 15;
        else if( day == "thursday")
            price = 12.50;
        else if (day == "saturday")
            price = 25;
        else if ( day == "sunday")
            price = 30;
    }

    if(price != 0)
        console.log(price);
    else
        console.log("error")
}
moviePrices(["casablanca", "monday"]);