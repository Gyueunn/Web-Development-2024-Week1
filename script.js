console.log('Starting....')
const balert = function(x){
    alert(x);
}
const addsTen = function(x){
    let total = (x + 10);
    document.getElementById('result').innerHTML = total;
}
const changeColor = function(x){
    let result = document.getElementById("result");
    result.classList.remove('text-red-500');
    result.classList.remove('text-blue-500');
    result.classList.add(x);
}
const enterName = function(){
    let name = prompt('Please Enter Your Name');
    let firstNameSpan = document.getElementById("firstName");
    firstNameSpan.innerHTML = name;
}
const bouncer = function(){
    let result = confirm("Are you ready?");
    if(result == true){
        alert('Yes');
    }else{
        alert('No');
        // window.close();
        // window.location.replace('https://youtube.com');
    }
}
bouncer();