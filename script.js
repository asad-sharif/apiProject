// script.js
const btn = document.querySelector('#btn');
const adviceContainer = document.querySelector('#advice');

btn.addEventListener('click', async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    
    let advice = document.createElement('p');
    advice.innerText = data.slip.advice;
    
    // Clear previous advice
    adviceContainer.innerHTML = '';
    
    adviceContainer.appendChild(advice);
});
