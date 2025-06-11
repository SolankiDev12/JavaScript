# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-rxyylodq?file=index.html)

# Solution code

## project 3 solution code

```javascript

const disp = document.getElementById('clock')
const disp2 = document.getElementById('datee')

setInterval( function(){
  const date = new Date();
  disp.innerHTML = date.toLocaleTimeString()
  disp2.innerHTML = date.toLocaleDateString()
} , 1000)

```
