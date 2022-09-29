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
const lastActivity=()=>{
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

createPost({title:'post three',body:'this is post three'})
.then(getPost);
PostFour({title:'post four',body:'this is post Four'})
.then(getPost);

const ms1=createPost();
const ms2=PostFour();
const ms3=deletePost();
const ms4=lastActivity()

Promise.all([ms1,ms2,ms4]).then((val)=>{
console.log(val)
})

deletePost().then(getPost)

console.log(posts)




