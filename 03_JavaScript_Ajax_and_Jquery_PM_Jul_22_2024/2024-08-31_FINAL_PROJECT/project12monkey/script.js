//The code below is the first step to see if the script is working with the HTML file

// alert("Hello World!!");

//After the test select all the active code above, press CTRL and / to set it like: //CODE;

let options = {
    method: 'GET',
}

let url = 'https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json'

fetch(url, options)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        const monkeys = data;
        getMonkeys(monkeys);

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

function getMonkeys(monkeys) {
    let myHtml = "";
    for (a = 0; a < monkeys.length; a++) {
        console.log(monkeys[a])
        myHtml += `

            <div class="card" style="width: 18rem; min-width: 400px; background-color: #E8E5DA;">
            <img src=${monkeys[a].Image} class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${monkeys[a].Name}</h4>
            <p class="card-text">${monkeys[a].Details}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }

    console.log(myHtml);

    document.getElementById('demo').innerHTML = myHtml;
    document.getElementById('card-title').innerHTML = myHtml;
}