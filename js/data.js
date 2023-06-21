const listItems = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
];

const ul = document.querySelector("ul");
let listItemHTML = '';
listItems.forEach(item => {
  listItemHTML += `
    <li><i></i>${item}</li>
  `
})

ul.innerHTML = listItemHTML;