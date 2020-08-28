document.getElementById('button1').addEventListener
('click', loadCustomer);

document.getElementById('button2').addEventListener
('click', loadCustomers);

function loadCustomer(e){
   const xhr = new XMLHttpRequest();
   
   xhr.open('GET','customer.json', true);

   xhr.onload = function() {
       if(this.status === 200) {
           console.log(this.responseText);

           //parse this as an object

           const user = JSON.parse(this.responseText);

           const output =  `
           <ul>
                <li>ID: ${user.id}</li>
                <li>NAME: ${user.name}</li>
                <li>COMPANY: ${user.company}</li>
                <li>PHONE: ${user.phone}</li>
           </ul>
           `;
           document.getElementById('customer').innerHTML = output;
       }
   }

   xhr.send();

}

//load customers
function loadCustomers(e){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET','customers.json', true);
 
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);
 
            //parse this as an object
 
            const users = JSON.parse(this.responseText);

            let output = '';

            users.forEach(function(user){
                output +=  `
                <ul>
                     <li>ID: ${user.id}</li>
                     <li>NAME: ${user.name}</li>
                     <li>COMPANY: ${user.company}</li>
                     <li>PHONE: ${user.phone}</li>
                </ul>
                `;

            })
 
            document.getElementById('customers').innerHTML = output;
        }
    }
 
    xhr.send();
 
 }