import BaseElement from './baseElement.js'
class TitleBar extends BaseElement{
    constructor(title){
        super();
        this.title = title;
        this.links = [];
    }
    addLink(href, name){
        let currentLink = $('<a>').addClass('menu-link') .attr('href', href).text(name);
        this.links.push(currentLink);
    }
    getElementString(){
        return $('<header>').addClass('header')
                .append($('<div>')
                    .append($('<span>').addClass('title').text(this.title)))
                .append($('<div>')
                    .append($('<nav>').addClass('menu')).append(this.links.join('|\n')));
    }
}
module.exports = TitleBar;