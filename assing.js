const user=((callback)=>{
    setTimeout(()=>{
        console.log("user is sending message")
        callback();
    },1000);
})
const message=((callback)=>{
    setTimeout(()=>{
        const msg="hello world";
        console.log("message is send");
        callback(message);
    },2000);
})
const receiver=((message)=>{
    setTimeout(()=>{
        console.log("message is recieved");
        console.log("message recieved,message");
        callback();
    },3000);
})






user(()=>{
    console.log("user done the message");
    message((message )=>{
        console.log("message done");
        reciever((message)=>{
            console.log("reciever done");
        })

    })
})