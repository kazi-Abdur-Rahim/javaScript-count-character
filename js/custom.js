/*var a = 60;
var b = 50;

// var ab = a-b;
// document.getElementsByClassName('one')[0].innerHTML = ab;

function totle()
{
    document.write(a+b +'<br>')
}


totle();
totle();
totle();

//
var fullcp = 'A Cox s Bazar court on Tuesday placed two people, including prime accused Ashiqul Islam Ashiq, on a three-day remand each  placed placed'  ;


document.getElementsByClassName('one')[0].innerHTML = fullcp.replace('placed','noakhali').toLocaleUpperCase();

var full =fullcp.length;
document.getElementsByClassName('one')[1].innerHTML=full;
*/



var area = document.getElementById('area');
var count = document.getElementById('count');

var totalT = 500;
var remain = document.getElementById('remain');
var para = document.getElementById('para');

function total()
{
    var totalInput = area.value.length;
    count.innerHTML = totalInput;
    var totalremain = totalT-totalInput;
    remain.innerHTML = totalremain;

}


total();






