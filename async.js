console.log('person1: show tickets');
console.log('person2: show tickets');

const prevMovie=async()=>{
    const prom1=new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    });
    const getPopcorn=new Promise((resolve, reject) => {
        resolve(`popcorn`)
    })

    const addbutter=new Promise((resolve, reject) => {
        resolve('butter')
    })
    const getCoolDrinks=new Promise((resolve, reject) => {
        resolve('cool Drinks')
    })
    let ticket=await prom1;

    console.log(`wife: i have the ${ticket}`);
    console.log('hus: we should go in');
    console.log('wife: no i am hungry')
    
    let popcorn=await getPopcorn;

    console.log(`hus: i got some ${popcorn}`);
    console.log('hus: we should go in');
    console.log('wife: i need butter on my popcorn')

    let butter=await addbutter;
    console.log(`hus: i got some ${butter} on my popcorn`);
    console.log(`hus: anything else`);
    let coolDrinks=await getCoolDrinks;
    console.log(`wife: get some cool drink`);
    console.log(`hus: i got some cool drinks`)
    console.log(`hus : anything else`)
    console.log(`wife: lets go we are getting late`);
    console.log(`hus: thank for reminder`)

    


    return ticket;
}

prevMovie().then((m)=>console.log(`person3: shows ${m}`))

console.log('person4: show tickets');
console.log('person5: show tickets');
