function dayOfWeek(str) {
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(days.indexOf(str)!= "undefined"){
        return days.indexOf(str) + 1;
    }
    else {
        return "error";
    }
}

    function dayOfWeek1(day) {
        if (day == 'Monday') return 1;
        if (day == 'Tuesday') return 2;
        if (day == 'Wednesday') return 3;
        if (day == 'Thursday') return 4;
        if (day == 'Friday') return 5;
        if (day == 'Saturday') return 6;
        if (day == 'Sunday') return 7;
        return "error";
    }

console.log(dayOfWeek(["Monday"]));