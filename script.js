//your code here

let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones', 'The Who'];

// remove articles from band names
const removeArticle = (name) => {
  return name.replace(/^(a|an|the)\s+/i, '').trim();
};
bandNames = bandNames.map(removeArticle);

// sort band names in lexicographic order
bandNames.sort((a, b) => a.localeCompare(b));

// display band names in an unordered list
const bandList = document.getElementById('band');
bandNames.forEach((name) => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});