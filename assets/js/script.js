// Task-6
let power=(m,n)=>{
    return Math.pow(m,n);
}
console.log(power(7,2));



// Task-1
function Reverse(){
    let word=["Sefiyye", "Nihad"];
        for (let index = 0; index < word.length; index++) {
            const element = word[index];
        for (let i=word[index].length; i>0; i--) {
           console.log(word[index].charAt(i-1));                
            }
        }
        return(word.reverse().join(""))
    }
   
    console.log(Reverse());


    // Task-7

    let array=[1,3,6,4,8,45,70];
    let find=array.findIndex(num);

    function num(value){
        return value==45;
    }
    console.log(find);



    // Task-2

    class Calculation{
        plus(value,a){
            return value+a;
        }

        minus(value,b){
            return value-b;
        }
        multiply(value,b){
            return value*b;
        }
        divide(value,b){
            return value/b;
        }
    }
    var numb= new Calculation().plus(50,6);
    var minus= new Calculation().minus(numb,30);
    var multiply= new Calculation().multiply(minus,3);
    var divide= new Calculation(). divide(multiply,2);

    console.log(divide);


// Task-4

var objPeople=[
    {
        username:"username1",
        password: "password1"
    }
]

function getInfo() {
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value

  for(i=0;i<objPeople.length;i++){
      if(username==objPeople[i].username && password==objPeople[i].password){
          console.log(username+ "is logged in!")
          return
      }
      
  }
  console.log("incorret username or password");
}