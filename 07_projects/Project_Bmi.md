# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-wk7ugwxr?file=script.js)

# Solution code

## Project 2

```javascript


const form = document.querySelector('form')
// console.log(form)


form.addEventListener('submit', function(e)
{
  e.preventDefault() //dont do default action

  const height  = document.querySelector('#height').value
  const weight  = document.querySelector('#weight').value //have to declare here as outside will give empty value
  parseInt(height)
  parseInt(weight)

  const results = document.querySelector('#results')

  if(height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height: ${height}<br>`;
    results.style.backgroundColor = 'black';
    results.style.color = 'white'; 
  }
  
  if(weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML += `Please enter a valid weight: ${weight}`;
    results.style.backgroundColor = 'black';
    results.style.color = 'white'; 
  }else
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML += `<span>${bmi}</span><br>`;
    results.style.backgroundColor = 'black';
    results.style.color = 'white';

    if(bmi < 18.6)
    {
      results.innerHTML = results + `<span>u are underweight</span>`;
    }
    else if(bmi > 18.6 && bmi < 24.9)
    {
      results.innerHTML += `<span>u are in normal range</span>`;
    }else
    {
      results.innerHTML += `<span>u fatty</span>`;
    }
  }
})

```
