/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp week3 day1 ExerciceXP Exercice 1 Users
 */

/*
1-Add the code above, to your HTML file

2-Using Javascript:
    1-Retrieve the div and console.log it
    2-Change the name “Pete” to “Richard”.
    3-Change each first name of the two <ul>'s to your name.
    4-Delete the <li> that contains the text node “Sarah”.
    
    3-Bonus - Using Javascript:
    1-Add a class called student_list to both of the <ul>'s.
    2-Add the classes university and attendance to the first <ul>.
    */

// 1-Retrieve the div and console.log it
let div = document.getElementById("container");
console.log(div);

// 2-Change the name “Pete” to “Richard”.
let liPete = document.querySelectorAll("ul>li")[1].innerHTML = "Richard";
//console.log(liPete);

// 3-Change each first name of the two <ul>'s to your name.
ul2 = document.querySelectorAll("ul>li:first-child");
//console.log(ul2);
ul2[0].innerHTML = "ETOUMI";
ul2[1].innerHTML = "ETOUMI";

// 4-Delete the <li> that contains the text node “Sarah”.
let ulLi = document.querySelectorAll("ul>li");
//console.log(ulLi);
for (let i = 0; i < ulLi.length; i++) {
    if (ulLi[i].innerHTML == "Sarah") {
        ulLi[i].closest("ul").removeChild(ulLi[i]);
        break;
    }
}
//Bonus
//1-Add a class called student_list to both of the <ul>'s.
let ulAddClass = document.getElementsByTagName("ul");
for (const ul of ulAddClass) {
    ul.classList.add("student_list");
}
//console.log(ulAddClass);

//2-Add the classes university and attendance to the first <ul>.
ulAddClass[0].classList.add("university", "attendance");
//console.log(ulAddClass);