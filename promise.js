const placeorder=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },2000);
    })
}  ;   
const satrtproduction=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },2000)
    })
};
const printid=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },2000)
    })
};
const productname =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },2000)
    })
};
const productdesc=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },2000)
    })
};
console.log("order is going to take")
placeorder().then(()=>{
    console.log("product is in production")
    return satrtproduction();
})
.then(()=>{
    console.log("id printing..")
    return printid();

})
.then(()=>{
    console.log("product name started printing")
    return productname();
})
.then(()=>{
    console.log("product desc started printing")
    return productdesc();
})

.catch((error)=>{
    console.log("error,error")
})