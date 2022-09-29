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
        });

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
        });

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

createPost({title:'post three',body:'this is post three'})
.then(getPost);
PostFour({title:'post four',body:'this is post Four'})
.then(getPost);

setTimeout(() => {
    deletePost().then(getPost)
}, 1000);


setTimeout(() => {
    deletePost().then(getPost)
}, 2000);

setTimeout(() => {
    deletePost().then(getPost)
}, 3000);
setTimeout(() => {
    deletePost().then(getPost)
}, 4000);



