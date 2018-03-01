let Article = require('./article.js');

class TableArticle extends Article {
    constructor(title, content) {
     super(title, content);
        this.headings = null;
        this.data = null;
    }
    loadData(heading, data){
        this.headings = heading;
        this.data = data;
    }
    getElementString(){
        // holds the keys (headings of the tables)
        let objectKeys = [];
        let dataStr = '';
        // sets the headings in the table
        let headingStr = '<tr>';

        for (let head of this.headings){
            headingStr += `<th>`;
            headingStr += head;
            headingStr += '</th>';

            let currentStr = '';
            for(let i=0;i<head.length;i++){
                if(head[i] != ' '){
                    currentStr +=head[i];
                }
            }
            objectKeys.push(currentStr.toLowerCase());
        }

        headingStr +='</tr>';
        //----------


        for(let singleRow of this.data){
            let currentRow = '<tr>';
            for(let singleKey of objectKeys){
                currentRow += `<td>${singleRow[singleKey]}</td>`
            }
            currentRow += '</tr>';
            dataStr +=currentRow;
        }


        return `<div class="article">
    <div class="article-title">${this.title}</div>
    <p>${this.content}</p>
    <div class="table">
        <table class="data">
           ${headingStr}
            ${dataStr}
        </table>
    </div>
    </div>`;
    }
}
module.exports = TableArticle;