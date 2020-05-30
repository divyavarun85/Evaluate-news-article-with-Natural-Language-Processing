




const retrieveAylienData = async (url = "",Text)=>{
    
    const getDetails = await fetch(url);
   
try {
    
   const nData = await getDetails.json();
    console.log(nData);
    document.getElementById('polarity').innerHTML = nData.textPolarity;
    document.getElementById('subjectivity').innerHTML = nData.subjectivity;
    document.getElementById('polarityCon').innerHTML = nData.polarityConfidence;
    document.getElementById('sub-con').innerHTML = nData.subjectivityConfidence;
    document.getElementById('results').innerHTML = nData.text;
    
    }catch(error) {
        console.log("i am error", error);
          // appropriately handle the error
     }
 }

 const postData = async ( url = '', data = {})=>{
     const response = await fetch('http://localhost:8081/test' ,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
        headers: {
         'Content-Type': 'application/json',
     },
     body:JSON.stringify(data),
     
     // body data type must match "Content-Type" header        
    });
   
try {
   const newData = await response;
    return newData;
    }catch(error) {
        console.log("i am error", error);
          // appropriately handle the error
     }
 }

 function handleSubmit() {
     event.preventDefault();
    var userText = document.getElementById('name').value;
    if(userText == ""){
        alert("Enter Subject");
      }else{
    postData('http://localhost:8081/test',{ UserText:userText })
    .then(function(){

    retrieveAylienData('http://localhost:8081/test',userText)
    });
}
    
}
   
export { handleSubmit,
        postData,
        retrieveAylienData
}
