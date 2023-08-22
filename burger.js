const addveggies = (callback)=>{
    setTimeout(()=>{
        const veggies ="veggies";
        console.log("veggies prepared",veggies);
        callback(veggies);
    },3000);
};
const addTikki = (veggies,callback)=>{


    
    setTimeout(()=>{
        const Tikki =veggies+"tomato";
        console.log("Tikki prepared",Tikki);
        callback(Tikki);
    },3000);
};
const makeBurger= (veggies,Tikki, callback)=>{
    setTimeout(()=>{
        const burger =veggies+Tikki+"burger";
        console.log("Burger prepared",burger);
        callback(burger);
    },3000);
};

console.log("preparing for burger");
addveggies((veggies)=>{
    console.log("preparing for Tikki started");
    addTikki((veggies)=>{
        console.log("preparing for  burger started");
         makeBurger(veggies,Tikki,(Burger)=>{

            
            console.log("burger is served");
            
        });

        });
    });