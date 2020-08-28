console.log('JS file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const location = search.value;

    messageOne.innerText = '';
    messageTwo.innerText = '';

    fetch(`/weather?address=${location}`)
        .then((res) => {
                res.json()
                    .then ((data) => {
                        if (data.error) {
                            messageOne.innerText = data.error;
                        } else {
                            messageOne.innerText = data.location;
                            messageTwo.innerText = data.forecast;
                        }
                    })
            }
        )

})