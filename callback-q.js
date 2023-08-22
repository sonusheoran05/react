console.log("ordering products........");
placeorder()
.then(()=>{
    console.log("product in production");
    return startproduction();
});

then(()=>{
    console.log("id printed started...");
    return printid();
});


then(()=>{
    console.log("naming  started...");
    return productname();
});
then(()=>{
    console.log("description started...");
    return productdesc();
});

.catch(()=>{
    console.log("error!!!");
});







