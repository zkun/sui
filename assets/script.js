function date() {
    let currentDate = new Date();
    let dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let date = currentDate.toLocaleDateString("zh-CN", dateOptions);
    document.getElementById("header_date").innerHTML = date;
}

function greet() {
    let currentTime = new Date();
    let greet = Math.floor(currentTime.getHours() / 6);
    let msg = "Good night!";
    switch (greet) {
        case 0:
            msg = "Good night!";
            break;
        case 1:
            msg = "Good morning!";
            break;
        case 2:
            msg = "Good afternoon!";
            break;
        case 3:
            msg = "Good evening!";
            break;
    }
    document.getElementById("header_greet").innerHTML = msg;
}

function loadFunctions() {
    date();
    greet();
}

function fetchAndRender(name) {
    fetch('/pages/' + name + '.json')
        .then(response => response.json())
        .then(data => {
            const mysource = document.getElementById(name + '-template').innerHTML;
            const mytemplate = Handlebars.compile(mysource);
            const myresult = mytemplate(data);
            document.getElementById(name).innerHTML = myresult;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRender('apps');
    fetchAndRender('links');
});
