function extractText([text]) {
    let start = text.indexOf('(');
    let extracted = [];

    while (start != -1){
        let end = text.indexOf(')',start);
        if(end == -1){break;}
            extracted.push(text.substring(start + 1, end));
            start = text.indexOf('(', end);
    }
    console.log(extracted.join(", "));
}
extractText(["(aa)Rakiya (Bulgarian brandy) is home-made liquor (alcoholic drink). It can be made of grapes, plums or other fruits (aa)"]);
extractText(["(alalalalllla"]);