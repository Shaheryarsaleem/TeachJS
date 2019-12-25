console.log("Event");
// mouseover
document.getElementById("myfirst").addEventListener('mouseover', function(e){
    let variable;
    console.log("Click fn fire");
    variable = e.target;    
    // variable = e.target.className;
    // variable = e.target.classList;
    // variable = Array.from(e.target.classList);

    // variable = e.target.id;
    // variable = e.offsetX;
    // variable = e.offsetY;
    // variable = e.clientX;
    // variable = e.clientY;   

    console.log(variable);
    // console.log(e);
})