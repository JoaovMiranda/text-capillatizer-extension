const upper = (text) => text.toUpperCase();
const lower = (text) => text.toLowerCase();
const returnValue = (selector) => document.querySelector(selector).value;


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn').addEventListener('click', function () {
        const text = returnValue('#text');
        document.querySelector('#result').innerHTML = upper(text);
    })

    document.querySelector('#btn2').addEventListener('click', function () {
        const text = returnValue('#text');
        document.querySelector('#result').innerHTML = lower(text);
    })
});