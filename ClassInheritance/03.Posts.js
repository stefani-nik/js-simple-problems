function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let rating = this.likes - this.dislikes;
            let str = `Post: ${this.title}\nContent: ${this.content}\nRating: ${rating}`;
            if (this.comments.length == 0) {
                return str.trim();
            }
            else {
                str += `\nComments:\n`;
                for (let comment of this.comments) {
                    str += ` * ${comment}\n`;
                }
            }
            return str.trim();
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post: Post,
        SocialMediaPost: SocialMediaPost,
        BlogPost: BlogPost
    }
}