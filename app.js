document.getElementById('button').addEventListener('click', loadData);

function loadData() {
   //create XHR object 
   const xhr = new XMLHttpRequest();

   //open
   //specify the type of request made and url and sync or async. 
   xhr.open('GET', 'data.txt', true);

   xhr.onload = function() {  //readystate step 4
    if(this.status === 200) {
        console.log(this.responseText);
        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
   }

   //Optional - used for spinner/loaders
   xhr.onprogress = function() {
       console.log('READYSTATE', xhr.readyState);
   }

   xhr.onerror = function () {
       console.log('Request error...')
   }

   xhr.send();


   //readyState values
   //0: request not initialised
   //1: server connection established
   //2: request received
   //3: processing request
   //4: request finished and response is ready

   //HTTP Statuses
   //200: "OK"
   //403: "Forbidden"
   //404: "File no found"
}