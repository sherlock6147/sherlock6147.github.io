var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/sherlock6147/repos', true);

request.setRequestHeader('User-Agent', 'Github-Portfolio-Site');

request.onload = function () {
    var data = JSON.parse(this.response);
    var sortedData = data.slice().sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at));
    var statusHTML = '';
    let count = 0, i=0;
    while (count<5) {
        if (sortedData[i].description != null) {
            count++;
            statusHTML += '<div class="swiper-slide"><h4>Name</h4><p>' + sortedData[i].name + "</p><br>";
            statusHTML += '<h4>Language</h4><p>' + sortedData[i].language + '</p><br>';
            statusHTML += '<h4>Description</h4><p>' + sortedData[i].description + '</p><br>';
            statusHTML += '<a href="'+ sortedData[i].html_url +'" class="git-link">See on Github</a> </div>';
        }
        ++i;
    }
    document.getElementById('projects-view').innerHTML = statusHTML;
};


request.send();

var navMenu = document.getElementById('small');

function toggleMenu() {
    navMenu.classList.toggle('inactive');
}
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });