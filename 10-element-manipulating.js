
// const el = document.querySelector('#aboutPage');
// console.log(el);
// console.log(el.className);
// console.log(el.id);
// console.log(el.href);


const normalize = (document) => {
  const coll = document.body.getElementsByTagName('*');
  console.clear()
  console.dir('...coll', [...coll]);
  let res = [...coll].forEach((el) => {
    // el.getAttribute('class');
    // el.className;
    console.dir('--', el.className.split(' ')
      .map((el) => {
        el.toUpperCase()
        // el.classList.remove(el.className);
        return el.toUpperCase();
      }));
    // el.classList.remove(el.className);
  });
  console.dir('res', res);
}
// console.log(document.body.innerHTML)
normalize(document)


el.classList.replace(curClass, camelCase(curClass));