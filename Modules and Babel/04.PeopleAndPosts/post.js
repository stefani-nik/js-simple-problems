class Post{
    constructor(title, body, author){
        this.title = title;
        this.body = body;
        this.author = author;

    }
    addToSelector(selector){
        let postDiv = $('<div>').addClass(`post ${this.author}`);
        let titleHeading = $('<h3>').addClass(`title`).text(`${this.title}`);
        let bodyParagraph = $('<p>').addClass(`body`).text(`${this.body}`);
        let authorParagraph = $('<p>').addClass(`author`).text(`${this.author}`);
        postDiv
            .append(titleHeading)
            .append(bodyParagraph)
            .append(authorParagraph);
        $(selector).append(postDiv);
    }
}
module.exports = Post;