function splitDelimeter([text, delimeter]){
    text.split(delimeter).forEach(x => console.log(x));
}
splitDelimeter(["one-two-three-four-five","-"]);