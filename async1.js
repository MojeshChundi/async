const posts=[
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()},
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((ele)=>{
          output+=`<li>${ele.title} is updated last ${Math.floor((new Date().getTime()-ele.createdAt)/1000)} sec Ago</li>`;
        })
        document.body.innerHTML=output;
    })

}
const createPost=(post)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         posts.push({...post,createdAt:new Date().getTime()});
         const error=false;
         if (!error) {
            resolve()
         }else{
            reject('Error:Something Went Wrong');
         }
        },3000);

    })
       
}
const PostFour=(post)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         posts.push({...post,createdAt:new Date().getTime()});
         const error=false;
         if (!error) {
            resolve()
         }else{
            reject('Error:Something Went Wrong');
         }
        },2000);

    })
       
}

const deletePost=()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        posts.pop();
        const error=false;
        if (!error) {
         resolve();
        }else{
         reject('Error:Something Went Wrong')
        }
       })
      
      
    })
}
 lastActivity=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('last activity ' + new Date().getTime())
            const error=false;
            if(!error){
                resolve()
            }else{
                reject('Error:Something Went Wrong')
            }
        })
       

    })
}
async function dowork(){
    let p1=await createPost({title:'post three',body:'this is post three'})
    .then(getPost);
    let p2=await PostFour({title:'post four',body:'this is post Four'})
    .then(getPost);
    let p3=await deletePost().then(getPost)

}
dowork();


