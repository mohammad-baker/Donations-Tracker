'use strict'

let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table)


let Donatall = [];
let randoming=[];

function Donat(name, amont) {
    this.name = name;
    this.amont = amont;
    this.randoming=[];
    Donatall.push(this);

   localset()
}



function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;


  }





function localset() {

    let strinArayy=JSON.stringify(Donatall);
    localStorage.setItem('Donatelocal',strinArayy)
    
}


function localGetitem() {
  dataFromloacl=localStorage.getItem('Donatelocal')

  let parseIntarray=JSON.parse(dataFromloacl)
  if (parseIntarray !== null){
      for (let i = 0; i < parseIntarray.length; i++) {
          
          new Donat(parseIntarray[i].name,parseIntarray[i].amont,parseIntarray[i].randoming[i])
      }
      Donatall.data();
  }
    
}

let form = document.getElementById('form')
form.addEventListener('submit', submitDonat)

function header() {



    let thraw = document.createElement('tr');
    table.appendChild(thraw);

    let thData = document.createElement('th');
    thraw.appendChild(thData);
    thData.textContent = ' Donater name '



    let thData2 = document.createElement('th');
    thraw.appendChild(thData2);
    thData2.textContent = ' Donation Amount '

    let thData3 = document.createElement('th');
    thraw.appendChild(thData3);
    thData3.textContent = ' age';
}
header()


Donat.prototype.data=function () {
    let tdraw = document.createElement('tr');
    table.appendChild(tdraw);
    let tdData = document.createElement('td');
    tdraw.appendChild(tdData);
    tdData.textContent = `${this.name}`;
    let tdData2 = document.createElement('td');
    tdraw.appendChild(tdData2);
    tdData2.textContent = `${this.amont}`;
    let tdData3 = document.createElement('td');
    
    for (let i = 0; i < randoming.length; i++) {
        
        tdraw.appendChild(tdData3);
        tdData3.textContent = `${randoming[i]}`;
        
    }
   
    
}
function submitDonat(event) {
    event.preventDefault();
    let name = event.target.DonaterName.value;
    let amont = parseInt(event.target.DonationAmount.value);
new Donat(name, amont)
table.textContent=''
header()
randoming.push(random(20,60));
 for (let i = 0; i< Donatall.length; i++) {
    Donatall[i].data();
    
    
 }
        


}








