function roadRadar([speed, area]) {
    speed = Number(speed);
    let speedAllowed = areaSpeed(area);
    let diff = speed - speedAllowed;

    if(diff > 0 && diff <= 20){
        return "speeding";
    }
    else if(diff > 20 && diff <= 40){
        return "excessive speeding";
    }
    else if(diff > 40){
        return "reckless driving"
    }
        function areaSpeed(areaS) {
            switch(areaS){
                case "motorway" : return 130;
                case "interstate" : return 90;
                case "city" : return 50;
                case "residential" : return 20;
            }
        }
}
console.log(roadRadar([40, "city"]));