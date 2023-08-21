
const placeholder=((callback)=>{
    setTimeout(()=>{
        console.log("order placed");
        callback();
    },2000)
})

const startproduction =((callback)=>{
    setTimeout(()=>{
        console.log("production started");
        callback();
    },2000)
})

const printID=((callback)=>{
    setTimeout(()=>{
        console.log("id printed");
        callback();
    },2000)
})


const productname=((callback)=>{
    setTimeout(()=>{
        console.log("product name");
        callback();
    },2000)
})
const productdesc=((callback)=>{
    setTimeout(()=>{
        console.log("productdesc");
        callback();
    },1000)
})
console.log('ordering product...');
placeorder(()=>{
    console.log('in production');
    startproduction(()=>{
        console.log('printing item started');
        printID(()=>{
            productname(()=>{
                productdesc(()=>{
                    console.log('day ended')
                })
            })
        })
    })
})


















