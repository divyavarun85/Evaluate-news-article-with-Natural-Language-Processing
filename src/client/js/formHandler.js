


   document.getElementById('submitbutton').addEventListener('click',handleSubmit);

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
         console.log('posti');
            const newData = await response.json();
             console.log(newData);
            return newData
            }catch(error) {
            console.log("i am error", error);
          // appropriately handle the error
     }
 }
 function handleSubmit() {
   
    var userText = document.getElementById('name').value;
    postData('/test',{ UserText:userText }) ;
    
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



export { handleSubmit,
        postData
}
