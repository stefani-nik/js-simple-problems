let Article = require('./article.js');

class ImageArticle extends Article {
    constructor(title, content, image) {
        super(title, content);
        this.image = image;
    }
    getElementString(){
        return `<div class="article">
    <div class="article-title">${this.title}</div>
    <div class="image"><img src="${this.image}"></div>
    <p>${this.content}</p>
</div>`;
    }
}
module.exports = ImageArticle;