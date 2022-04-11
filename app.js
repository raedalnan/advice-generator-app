const id = document.querySelector("#id");
const advice = document.querySelector("#advice");
const dice = document.querySelector(".dice");

dice.addEventListener("click" , () => {
    adviceGen();
})
function adviceGen(){
    console.log("start function");
    // let obj = fetch("https://api.adviceslip.com/advice") 
    // .then(res=>{
    //     return res.json();
    // })
    // .then(data=>{
    //     console.log(data);
    //     id.innerText = data.slip.id ;
    //     advice.innerText = data.slip.advice ;
    // })
    const xhr = new XMLHttpRequest;
    xhr.open("GET" , "https://api.adviceslip.com/advice")
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const data = xhr.response ;
        if(xhr.status == 200){
             console.log(data);
            id.innerText = data.slip.id ;
            advice.innerText = data.slip.advice ;
        }else{
            console.log("something went wrong!.")
        }
    }
    xhr.send();
    console.log(xhr);
}
adviceGen();