/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day1 ExercicesXP Exercice4: My Book List
 */

/*
The point of this challenge is to display a list of two books on your browser.

1- In the body of the HTML page, create an empty div:
<div class="listBooks"></div>
2- In the js file, create an array called allBooks. This is an array of objects. 
Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

3- Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
4- Requirements : All the instructions below need to be coded in the js file:
    1- Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
        ° You have to display the book’s title and the book’s author.
        Example: HarryPotter written by JKRolling.
        ° The width of the image has to be set to 100px.
        ° If the book is already read. Set the color of the book’s details to red.
*/

//2
let allBooks = [
    {
        title: "Les Fleurs Du Mal",
        author: "Charles Baudelaire",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Fleurs_du_Mal_-_3rd_edition_%281869%29.JPG/300px-Fleurs_du_Mal_-_3rd_edition_%281869%29.JPG",
        alreadyRead: true
    },
    {
        title: "Un Si Longue Lettre",
        author: "Mariama Bâ",
        image: "https://afriknow.files.wordpress.com/2014/01/une-si-longue-lettre.jpg",
        alreadyRead: false
    }
    /*{
        title: "Les Frasques d'Ebinto",
        author: "Amadou Kone",
        image: "https://images-na.ssl-images-amazon.com/images/I/41MOE2gcjnL._SX210_.jpg",
        alreadyRead: false
    },
    {
        title: "Les Soleils Des Indépendances",
        author: "Ahmadou Kourouma",
        image: "https://actualitte.com/uploads/images/soleil-inde_CC_81pendances-07cb6a10-dce6-4f8c-be9b-5b67fff2be87.jpg",
        alreadyRead: true
    }*/
];

let div = document.getElementsByClassName("listBooks")[0];

let table = document.createElement("table");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');

td1.innerHTML = allBooks[0].title + " written by " + allBooks[0].author;
if(allBooks[0].alreadyRead) td1.style.backgroundColor = 
td2.innerHTML = '<img src="' + allBooks[0].image + '" width="100px">';
td3.innerHTML = allBooks[1].title + " written by " + allBooks[1].author;
td4.innerHTML = '<img src="' + allBooks[1].image + '" width="100px">';

tr1.appendChild(td1);
tr1.appendChild(td2);
tr2.appendChild(td3);
tr2.appendChild(td4);

table.appendChild(tr1);
table.appendChild(tr2);

div.appendChild(table);

console.log(div);