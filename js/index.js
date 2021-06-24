var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/sherlock6147/repos', true);

request.onload = function () {
    var data = JSON.parse(this.response);
    var sortedData = data.slice().sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at));
    var statusHTML = '';
    for (var i = 0; i < 5; ++i) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + '<a href=\"' + sortedData[i].html_url + "\">" + sortedData[i].name + '</a>' + '</td>';
        statusHTML += '<td>' + sortedData[i].language + '</td>';
        statusHTML += '</tr>';
    }
    $('tbody').html(statusHTML);
};

request.send();

var navMenu = document.getElementById('mob-nav');

function showNav() {
    var menuBtn = document.getElementById('menu-btn');
    navMenu.classList.toggle('invisible');
}