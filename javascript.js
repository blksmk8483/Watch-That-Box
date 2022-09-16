//click on button to make it bigger
document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
});

//click on button to make it blue
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

//click on button to make it fade
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0"
});

//click on button to reset the page - still could not figure this out - Need to study this more

// document.getElementById("button4").addEventListener("click", function(){
//         document.getElementById("box").style.height = "150px";
//         document.getElementById("box").style.backgroundColor = "orange";
// });

// document.getElementById("button4").onclick = function() {
//     document.getElementById("box").innerHTML = "";
//   };

// function clearResult(){
//     document.getElementById("button4").value = ''
//   }

// document.getElementById("button4").reset();


// let btnClear = document.querySelector('button');
// let inputs = document.querySelectorAll('input');

// btnClear.addEventListener('click', () => {
//     inputs.forEach(input => input.value = '#box');
// })

// If I click button 4 this will reload the page, so I am not actually resetting the page, kind of a working cheat until I actually figure this out. :)
function myButton() {
    location.reload();
}