"use strict";
const DomElement = function (selector,height,width,bg,fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;


}

DomElement.prototype.createElem = function() {
  let item 
  console.log(item)
  if (this.selector.startsWith(".")) {
    item = document.createElement('div');
    item.classList.add(this.selector.slice(1));
     document.body.append(item);
   
  } else if (this.selector.startsWith("#")) {
    item = document.createElement('p');
    item.setAttribute('id', this.selector.slice(1));
  
    document.body.append(item);
  }

  item.style.cssText = `
  height: ${this.height}px;
  width: ${this.width}px;
  background: ${this.bg};
  font-size: ${this.fontSize}px;`;
  item.textContent = 'Элемент создан'
}


const newItem1 = new DomElement('#best', "200", "200", "tomato", "20");

const newItem2 = new DomElement('.block', "200", "200", "blue", "20");

newItem1.createElem()
newItem2.createElem()