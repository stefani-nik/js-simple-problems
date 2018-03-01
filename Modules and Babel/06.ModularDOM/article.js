let BaseElement = require('./baseElement.js');

class Article extends BaseElement {
    constructor(title, content){
        this.title = title;
        this.content = content;
        this.timestamp = new Date().getTime();
    }

    getElementString() {
        return $('<div>').addClass("article")
            .append($('<div>').addClass("article-title").text(`${this.title}`))
            .append($('<p>').text(`${this.content}`));
    }
}
module.exports = Article;