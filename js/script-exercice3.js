/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day1 ExercicesXP Exercice 3: Change The Navbar
 */

/*
1-Add the code above, to your HTML file

2-In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, 
using the setAttribute method.

3-We are going to add a new <li> to the <ul>.
    1-First, create a new <li> tag (use the createElement method).
    2-Create a new text node with “Logout” as its specified text.
    3-Append the text node to the newly created list node (<li>).
    4-Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

4- Bonus
 Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
 */

//2
let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");
console.log(div);

//3-1
let li = document.createElement("li");

//3-2
let textNode = document.createTextNode("Logout");

//3-3
li.appendChild(textNode);

//3-4
let ul = div.children[0];
ul.appendChild(li);

//4
let firstLi = ul.firstElementChild;
console.log(firstLi.textContent);

let lastLi = ul.lastElementChild;
console.log(lastLi.textContent);