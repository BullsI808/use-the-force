

var people = document.getElementById('peopleResult');
var height = document.getElementById('height');

var mass = document.getElementById('mass');
var gender = document.getElementById('gender');

var birthYear = document.getElementById('birthYear');

var people2 = document.getElementById('peopleResult2');
var height2 = document.getElementById('height2');


var mass2 = document.getElementById('mass2');
var birthYear2 = document.getElementById('birthYear2');
var gender2 = document.getElementById('gender2');

var people3 = document.getElementById('peopleResult3');

var height3 = document.getElementById('height3');
var mass3 = document.getElementById('mass3');

var birthYear3 = document.getElementById('birthYear3');
var gender3 = document.getElementById('gender3');

var planets = document.getElementById('planetsResult');

var films = document.getElementById('filmsResult');

function reqListener () {
    var data = JSON.parse(this.responseText);
    
    people.innerHTML = data.name;
    height.innerHTML = data.height;
    
    mass.innerHTML = data.mass;
    
    gender.innerHTML = data.gender;
    birthYear.innerHTML = data.birth_year;
};

var oReq = new XMLHttpRequest();
oReq.addEventListener('load' , reqListener);
oReq.open('get' , 'https://swapi.co/api/people/1/');

oReq.send();

 function reqListener2 () {
    var data2 = JSON.parse(this.responseText);
    people2.innerHTML = data2.name;
    
    height2.innerHTML = data2.height;
    mass2.innerHTML = data2.mass;
    
    gender2.innerHTML = data2.gender;
    birthYear2.innerHTML = data2.birth_year;
 };

 var oReq2 = new XMLHttpRequest();
 oReq2.addEventListener('load' , reqListener2);
 
 oReq2.open('get' , 'https://swapi.co/api/people/4/');
 oReq2.send();

 function reqListener3(){
    var data3 = JSON.parse(this.responseText);
    people3.innerHTML = data3.name;
    
    height3.innerHTML = data3.height;
    mass3.innerHTML = data3.mass;
    
    gender3.innerHTML = data3.gender;
    birthYear3.innerHTML = data3.birth_year;
 } 
 
 var oReq3 = new XMLHttpRequest();
 oReq3.addEventListener('load' , reqListener3);
 
 oReq3.open('get' , 'https://swapi.co/api/people/5/');
 oReq3.send();

 function reqListener4(){
     
    var data4 = JSON.parse(this.responseText);


     console.log(data4);
     
     for(var i = 0; i < data4.results.length ; i++){
        var div = document.createElement('div');
        div.className = 'planets';
        div.innerHTML = data4.results[i].name;
        planets.appendChild(div);
     };
     
 }
 var oReq4 = new XMLHttpRequest();
 oReq4.addEventListener('load' , reqListener4);
 
 oReq4.open('GET' ,'https://swapi.co/api/planets/' );
 oReq4.send();

 function reqListener5(){
    var data5 = JSON.parse(this.responseText);
    console.log('data5', data5);
    for(var i = 0 ; data5.results.length ; i++){
        var div2 = document.createElement('div');
        div2.className = 'films';
        div2.innerHTML = data5.results[i].title;
        films.appendChild(div2);
        var div3 = document.createElement('div');
        div3.className = 'director';
        div3.innerHTML = data5.results[i].director;
        films.appendChild(div3);
        var div4 = document.createElement('div');
        div4.className = 'episodeID';
        div4.innerHTML = data5.results[i].episode_id;
        films.appendChild(div4);
    }
 }

 var oReq5 = new XMLHttpRequest();
 oReq5.addEventListener('load' , reqListener5);
 oReq5.open('get' , 'https://swapi.co/api/films/');
 oReq5.send();


