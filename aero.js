const placeholder=((callback)=>{
    setTimeout(()=>{
        console.log("order placed");
        callback();
    },2000)
})

const boarding =((callback)=>{
    setTimeout(()=>{
        console.log("boarding pass");
        callback();
    },1000)
})
const security =((callback)=>{
    setTimeout(()=>{
        console.log("security check");
        callback();
    },2000)
})

const self =((callback)=>{
    setTimeout(()=>{
        console.log("self check");
        callback();
    },3000)
})
const navigate=((callback)=>{
    setTimeout(()=>{
        console.log("navigation");
        callback();
    },1000)
})

const bus=((callback)=>{
    setTimeout(()=>{
        console.log("via bus");
        callback();
    },2000)
})
const airplane=((callback)=>{
    setTimeout(()=>{
        console.log("airplane");
        callback();
    },3000)
})

const aircraft =((callback)=>{
    setTimeout(()=>{
        console.log("vai aircraft");
        callback();
    },1000)
})
const destination =((callback)=>{
    setTimeout(()=>{
        console.log("destination");
        callback();
    },4000)
})
console.log('ordering product...');
placeorder(()=>{
    console.log('for boarding pass');
    startproduction(()=>{
        console.log('security check');
        self (()=>{
            navigate(()=>{
                bus(()=>{
                    airplane(()=>{
                        aircraft(()=>{

                        })
                    })
                    console.log('destination')
                })
            })
        })
    })
})

