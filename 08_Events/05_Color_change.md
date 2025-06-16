# Random Background Color Changer

This documentation provides an overview of a simple JavaScript program that allows you to change the background color of a webpage at regular intervals using random hexadecimal color codes. 

## Overview

- The program generates a random color every second.
- The background color can be started and stopped using buttons.
- It utilizes basic JavaScript functions and event listeners.
- click here [https://stackblitz.com/edit/stackblitz-starters-yfvjf6ga?file=script.js]
## Code Explanation

### Random Color Generation
```javascrip
const randomclr = function()
{
  const hex  = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0 ; i < 6 ; i++)
  {
    color += hex[Math.floor(Math.random() * 16)] ;
  }
  return color

}
let intervalid ;
const startChangingColor = function () 
{
  if(!intervalid)
  intervalid = setInterval(changecolor,1000);

  function changecolor()
  {
    document.body.style.backgroundColor = randomclr();
  }
}

const stopChangingColor = function () 
{
  clearInterval(intervalid);
  intervalid = null;
}


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

# Key Event Viewer

This project demonstrates a simple web application that captures and displays details of the keyboard keys pressed by the user. It updates the displayed information in real-time, showcasing the `key`, `keyCode`, and `code` values associated with the pressed key.

## Features

- Captures key presses and displays:
  - **Key**: The actual key pressed (e.g., 'A', 'Enter', 'Space').
  - **Keycode**: The numerical code representing the key (deprecated).
  - **Code**: The physical key location on the keyboard.
- Displays a friendly message prompting the user to press a key.
- click here [https://stackblitz.com/edit/stackblitz-starters-yfvjf6ga?file=script.js]
## Code Explanation
```javascrip
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th> 
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td> 
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
`
});
```
