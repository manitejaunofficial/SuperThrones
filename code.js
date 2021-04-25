// var movies = [];
// function addToList(){
//     $("button").click(function() {
//         var movieItem = $(this).val();
//         if (!(movies.includes(movieItem))) {
//             movies.push(movieItem);
//             alert(movieItem +" is added");
//         }else{    
//             alert("Movie Already Added");
//         }
//     });
//     console.log(movies);


var items=[];
console.log(items);
function addToList(val){
    console.log(val);
    if (items.includes(val)){
        alert("Already in the List");
    }
    else{
        items.push(val);
    }
    console.log(items);
}

// if (movies.length==0){
//     document.getElementById("mm").innerHTML= "HOla";
// }