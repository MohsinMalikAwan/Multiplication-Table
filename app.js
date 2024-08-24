//  const num = [1,2,3,4,5,6,7,8,9,10];
//  let userValue = prompt("Enter a numer");
//  for(let i = 0; i<num.length; i++){
//      console.log(userValue,'*',num[i],'=',num[i]*userValue);
//  }
// ;


function btn() {
    
            let number = document.getElementById("number").value;
            let display = document.getElementById("display");
            var i ,temp;
    for (let i = 1; i <= 10; i++) {

        display.innerHTML += number +" x " + i + " = "+ number*i+"</br></br>"
        

    }
}


