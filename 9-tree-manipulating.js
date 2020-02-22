
/* const body = document.body;
console.log("TCL: body", body.innerHTML);

body.innerHTML = '<p>paragraph</p>';
console.log("TCL: body.childNodes", body.childNodes);

const textNode = document.createTextNode('text node');
const pEl = document.createElement('p');
pEl.append(textNode);
const el = document.createElement('div');
el.append(pEl, 'textttt');
console.dir("TCL: el", el.tagName);
body.append(el); */

//---------------------------------------
// const el = document.createElement('p');
// document.body.append(el);
// document.body.prepend(el);
// document.body.after(el);
// document.body.before(el);
// // document.body.replaceWith(el);
// el.cloneNode;
// document.body.before(el.cloneNode())
const document.documentElement.innerHTML = '<div>Text</div>';
const search = (document, tag) => [...document.children].reduce((acc, el) => {
  if (el.tagName.toLowerCase() === tag) {
    return el.children.length ? [...acc, el, ...search(el, tag)] : [...acc, el];
  }
  return el.children.length ? [...acc, ...search(el, tag)] : acc;
}, []);

const res = search(document, 'div')
