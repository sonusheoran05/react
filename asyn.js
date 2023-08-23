


    function delay (time){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve();
            },time);
        })
    }
    async function placeorder(){
        await delay(2000);
        console.log("order takenn");
    }
    async function satrtproduction(){
        await delay(2000);
        console.log("production started");
    }
    async function printid(){
        await delay(2000);
        console.log("id printing");
    }
    async function productname(){
        await delay(2000);
        console.log("product name started printing");
    }
    async function productdesc(){
        await delay(2000);
        console.log("product desc start printing");
    }