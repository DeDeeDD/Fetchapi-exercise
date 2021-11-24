
const serverdata = "https://fakestoreapi.com/products";
const resultContainerTag = document.querySelector(".resultContainer");
const textAreaTag = document.querySelector(".textArea");
let dataArray;
fetch(serverdata)

.then((response)=>{
const jsonResponse = response.json();
    return jsonResponse;
})

.then((ResolveDataRequest)=>{
 dataArray = ResolveDataRequest;
console.log("Resolved... Now products data : ",dataArray);
textAreaTag.style.display = "block";
UIdisplay();

})

.catch((errorData)=>{
    console.log("Error in :",errorData)
});


const UIdisplay =()=>{
    
    textAreaTag.addEventListener("keyup",(event)=>{
    
    const yourSearchText = event.target.value.toLowerCase();
    //console.log("keyup is working now...",yourSearchText);
    
    
    
    const filtered = dataArray.filter(products=>  { 
        return   products.title.toLowerCase().includes(yourSearchText);
    });
    
        const checkingProducts = filtered.length>0;
        
        if (checkingProducts){
    
            if (yourSearchText.length===0){
                resultContainerTag.innerHTML="";
                return;
            }
            resultContainerTag.innerHTML="";
            for (i=0; i<filtered.length; i++){
                
                const rescultDiv = document.createElement("div");
                rescultDiv.id = filtered[i].id;
                rescultDiv.classList.add ("resultContainerDiv");
    
                const pictureTag = document.createElement("img");
                pictureTag.classList.add("pictureResult");
                pictureTag.src = filtered[i].image;
                //console.log(pictureTag.src);
    
                const productName = document.createElement("div");
                productName.append(filtered[i].title)
                productName.classList.add("productname");
    
                rescultDiv.append(pictureTag,productName);
                resultContainerTag.append(rescultDiv);
    
    
            }
        }
        
    });
    
    
}



