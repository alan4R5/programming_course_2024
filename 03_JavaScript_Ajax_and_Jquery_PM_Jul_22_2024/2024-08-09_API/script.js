let options = {
    method: 'GET',
    headers: { 'x-api-key': 'YOUR_KEY' }
}

let url = 'https://api.api-ninjas.com/v1/dadjokes'


fetch(url, options)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.getElementById("demo").innerHTML = data[0].joke;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });