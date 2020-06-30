function getNumber(num){
       
    var input = document.getElementById("input");
     input.value += num;

}
function clearResult(){
 var input = document.getElementById("input").value="";
 var input = document.getElementById("answer").value="";
}

function getResult(){
 var input = document.getElementById('input');
   ans = Math.floor(+eval(input.value));
    
    document.getElementById('answer').value = '=' + ans;

}

function backSpace(){
 var input = document.getElementById("input");
 var x = input.value;
 if(x.length >0){
     x = x.substring(0,x.length-1);
     input.value = x;
 }
}