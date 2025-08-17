// class Ipl{
//     constructor(team,captain){
//         this.captain=captain;
//         this.team=team;
//     }
//     play(){
//         console.log(this.captain+"is captain of"+this.team)
//     }
// }

// const Csk=new Ipl("Csk","MS Dhoni")
// Csk.play();

// const temp=(fn)=>{
//     console.log("cooking food")
//     fn();
// }

// const eatfood=()=>{
//     console.log("eating food")
// }

// temp(eatfood); 

const users= new Promise((success,fail)=>{
    const userApi=fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        success((userApi))
    
}).then((userApi)=>userApi?.json())
.then(json=>{console.log(json)})
.catch((err)=>{
    console.log(err)
})

