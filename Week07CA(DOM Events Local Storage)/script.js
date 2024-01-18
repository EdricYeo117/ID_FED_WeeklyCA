/*let getHot = document.querySelectorAll('li.hot');
for (let i = 0; i < getHot.length; i++) {
  console.log(getHot);
  getHot.className = 'cool';
}*/

/* et getHot = document.getElementsByClassName('hot');
if (getHot.length >= 3) {
  getHot[2].className = 'cool';
} */


let ele = document.getElemmentsByTagName('li');
let found = false;
let i = 0;
while (!found) {
  if (ele[i].className.includes('hot')) {
    ele[i].className = 'cool';
    found = true;
  }
  i++;
}
