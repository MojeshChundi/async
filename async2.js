

    let prom1=new Promise((resolve, reject) => {

        setTimeout(()=>{

            resolve('Buy a car')

        },5000)
    })

    let prom2=new Promise((resolve, reject) => {

        setTimeout(()=>{

            resolve('to days to reach manali')

        },3000)
    })

    let prom3=new Promise((resolve, reject) => {

        resolve('visit manali')

    },2000)

    let prom4=new Promise((resolve, reject) => {
          
        resolve('return to home')

    },1000)

    async function manali(){

     try{

    let p1= await prom1;
    console.log(p1)
    let p2=await prom2;
    console.log(p2);
    let p3=await prom3;
    console.log(p3);
    let p4=await prom4;
    console.log(p4)

     }

     catch(err){

        console.log('Error:somthing went wrong');
        
     }

     }

 manali()