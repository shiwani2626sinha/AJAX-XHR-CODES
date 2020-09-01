const http = new easyHTTP;


//GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, posts)
{
    if(err) {
              console.log(err);
    }
     else {
             console.log(posts);
     }

    
});

// get single post
http.get('https://jsonplaceholder.typicode.com/posts/1', 
function(err, posts)
{
    if(err) {
              console.log(err);
    }
     else {
             console.log(posts);
     }

    
});
 

 //create data
 // id will be added by the backend
  const data = {
     title : 'Custom Post',
     body : 'This is a custom Post'
 }
 
//POST request
 http.post('https://jsonplaceholder.typicode.com/posts', data ,
 function (err, post) {
     if(err) {
        console.log(err);
     }
     else {
        console.log(post);
     }
    
    
} ); 

// update post

 http.put('https://jsonplaceholder.typicode.com/posts/5', data, 
function(err, posts) {

    if(err) {
        console.log(err);
}
else {
       console.log(posts);
}

}); 

//DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/501', 
function(err, response)
{
    if(err) {
              console.log(err);
    }
     else {
             console.log(response);
     }

    
});