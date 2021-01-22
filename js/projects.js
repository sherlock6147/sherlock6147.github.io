var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/sherlock6147/repos', true);

request.onload = function () {
    var data = JSON.parse(this.response);
    var statusHTML = '';
    for (var i = 0; i < data.length; ++i) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + '<a href=\"' + data[i].html_url + "\">" + data[i].name + '</a>' + '</td>';
        statusHTML += '<td>' + data[i].language + '</td>';
        statusHTML += '</tr>';
    }
    $('tbody').html(statusHTML);
};

request.send();

var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('main-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("invisible");
});