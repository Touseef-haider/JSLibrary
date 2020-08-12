// This is the library for making get,post,put and delete method made with 
function HTTPLibrary(){
    this.http = new XMLHttpRequest();
}
//Get Request
HTTPLibrary.prototype.get = function(url){
    return new Promise((resolve,reject)=>{
        this.http.open('GET',url,true);
        let self = this;
        this.http.onload = function(){
            if (self.http.status===200) {
                resolve(self.http.responseText);   
            }else{
                reject(self.http.status)
            }
        }
        this.http.send();
     })
}
//Post Request
HTTPLibrary.prototype.post = function(url,data){
    return new Promise((resolve,reject)=>{
        this.http.open('POST',url,true);
        this.http.setRequestHeader('content-type','application/json')
        let self = this;
        this.http.onload = function(){
            if (self.http.status===200) {
                resolve(self.http.responseText)
            }
            else{
                reject(self.http.responseText);   
            }
        }
        this.http.send(JSON.stringify(data));
})
}

//PUt request
HTTPLibrary.prototype.put = function(url,data,callback){
    return new Promise((resolve,reject)=>{
        this.http.open('PUT',url,true);
        this.http.setRequestHeader('content-type','application/json')
        let self = this;
        this.http.onload = function(){
            if (self.http.status===200) {
                resolve(self.http.responseText)
            }
            else{
                reject(self.http.responseText);   
            }
        }
        this.http.send(JSON.stringify(data));
    })
}
//Delete request

HTTPLibrary.prototype.delete = function(url){
    return new Promise((resolve,reject)=>{
        this.http.open('DELETE',url,true);
        let self = this;
        this.http.onload = function(){
            if (self.http.status===200) {
                resolve(self.http.responseText)
            }
            else{
                reject(self.http.responseText);   
            }
        }
        this.http.send();
    })
}
This is ES6 form of the above code
class HTTPClassLibrary{
    get(url){
        return new  Promise((resolve,reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        }   
        ) 
    }
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })
    }
    
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"DELETE",
                headers:{
                    'content-type':'application/json'
                },
            })  
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })
    }

}