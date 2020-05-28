




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
    postData('/test',{ UserText:userText })
    .then(function(){

    retrieveAylienData('/test',userText)
    });
}
    
}
    // check what text was put into the form field
  /*  let formText = document.getElementById('name').value
  
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
   
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.message
        return formText
    }).then (function(formText){
       
        const postData  = async(url ='',data ={}) =>{
            
            const resData = await fetch('/test',{
                
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                      'Content-Type': 'application/json',
                  },
                 
                body: JSON.stringify(data),
              })
             
              try{
                 const newData = resData.status;
                return newData;
                } catch(error){
                console.log("i am error", error);
                  }   
             
    }
    )*/


    //document.getElementById('submitbutton').addEventListener('click',handleSubmit);
export { handleSubmit,
        postData,
        retrieveAylienData
}
