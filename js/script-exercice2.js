/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day1 ExercicesXP Exercice 2
 */

/*
1- Add the code above, to your HTML file

2- Add a “light blue” background color and some padding to the <div>.

3- Do not display the <li> that contains the text node “John”.

4- Add a border to the <li> that contains the text node “Pete”.

5- Change the font size of the whole body.

6- Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

//2
var div = document.getElementsByTagName("div")[0];
//console.log(div);
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

//3 + 4
var liHide = document.getElementsByTagName("li");
console.log(liHide);
for (const li of liHide) {
    if (li.innerHTML == "John") {
        li.style.display = "none";
    }
    if (li.innerHTML == "Pete") {
        li.style.border = "1px solid orange";
    }
}

//5
document.body.style.fontSize = "30px";

//6
if (div.style.backgroundColor == "lightblue") {
    let dataDiv = "Hello ";
    for (let i = 0; i < liHide.length; i++) {
        if (i != liHide.length - 1) {
            dataDiv += liHide[i].innerHTML + " and ";
        } else {
            dataDiv += liHide[i].innerHTML;
        }

    }
    alert(dataDiv);

}