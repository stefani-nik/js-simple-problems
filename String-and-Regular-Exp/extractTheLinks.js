function extractTheLinks(input) {
    let pattern = /www.([A-Za-z0-9-]+)([.][a-z]+)+/g
    let links = [];
    for(let line of input){
        let match = pattern.exec(line);
        while(match) {
            links.push(match[0]);
            match = pattern.exec(line);
        }
    }
    console.log(links.join("\n") );
}
extractTheLinks(["Join WebStars now for free, at www.web-stars.com","You can also support our partners:",
    "Internet - www.internet.com",
"www.1111A-.s*aa   ghjg   111122333www.A0--.    A.AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL**",
"Sentinel - -twww.a.a. - -ko"]);