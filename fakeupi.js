async function fetchdata(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        if (!response.ok){
            throw new Error("network response was not ok");
        }
    

const data= await response.json();
console.log(data);
}
catch (error){
    console.log("Error fetching data:",error);
}
}
fetchdata();