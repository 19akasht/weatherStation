console.log("ajax");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you clicked the button");

  const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);

//   xhr.onreadystatechange = function (){
//     console.log("ready state code", xhr.readyState)
//   }

//   xhr.onprogress = function () {
//       console.log("onprogress");
//   };

  xhr.onload = function () {
    if (this.status === 200) {
    console.log(this.responseText);
    } else {
        console.log("Some Error");
    }
  };

  params = `{"name":"test","salary":"123","age":"27"}`;

  xhr.send(params);

  console.log("We are done")
}


let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler(){
    console.log("you have cliked pop handler button");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.getResponseHeader('content-type', 'application/json');

    // xhr.onprogress = function(){
    //     console.log('On progress')
    // }

    xhr.onload = function() {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj);

            let list = document.getElementById("list")
            str = ""

            for (key in obj){
                str += `<li>${obj[key].title}</li>`
            }

            list.innerHTML = str;
        }  else {
            console.log('Error 404!')
        }
    }

    xhr.send();

    console.log("Done")
}