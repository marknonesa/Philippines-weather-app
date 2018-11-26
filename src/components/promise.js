const promise = new Promise ((resolve, reject) =>
    {
         if (true){
              resolve("true");}
         else{
             reject("false")
    }
    })   

promise 
    .then (result => result + 'tanga')
    .then (result2 => console.log(result2))

