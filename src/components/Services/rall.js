
import fetch from 'fetch' 
import axios  from 'axios'


export default {
	
	 register : (user)=>{
	 	
	 	  return new Promise((resolve,reject)=>{
	 	 	
	 	 	    fetch(`${REACT_APP_API}/register`)
	 	 	    .then((response)=>{
	 	 	    	 if(!response.user){
	 	 	    	 	 
	 	 	    	 	  reject({status: 'failed',failed:response})
	 	 	    	 	 
	 	 	    	 }else{
	 	 	    	 	
	 	 	    	 	 resolve(response)
	 	 	    	 }
	 	 	    	  
	 	 	    }) 
	 	 	    .catch((e)=>{
	 	 	    	
	 	 	    	 reject(e)
	 	 	    })
	 	 	
	 	  })
	 	 
	 },
	 
	 login : (user)=>{
	 	
	 	  return new Promise((resolve,reject)=>{
	 	 	
	 	 	    fetch(`${REACT_APP_API}/register`)
	 	 	    .then((response)=>{
	 	 	    	 if(!response.user){
	 	 	    	 	 
	 	 	    	 	  reject({status: 'failed',failed:response})
	 	 	    	 	 
	 	 	    	 }else{
	 	 	    	 	
	 	 	    	 	 resolve(response)
	 	 	    	 }
	 	 	    	  
	 	 	    }) 
	 	 	    .catch((e)=>{
	 	 	    	
	 	 	    	 reject(e)
	 	 	    })
	 	 	
	 	  })
	 	 
	 }, 
	 
	 auth : (user)=>{
	 	
	 	  return new Promise((resolve,reject)=>{
	 	 	
	 	 	    fetch(`${REACT_APP_API}/register`)
	 	 	    .then((response)=>{
	 	 	    	 if(!response.user){
	 	 	    	 	 
	 	 	    	 	  reject({status: 'failed',failed:response})
	 	 	    	 	 
	 	 	    	 }else{
	 	 	    	 	
	 	 	    	 	 resolve(response)
	 	 	    	 }
	 	 	    	  
	 	 	    }) 
	 	 	    .catch((e)=>{
	 	 	    	
	 	 	    	 reject(e)
	 	 	    })
	 	 	
	 	  })
	 	 
	 }, 
	 
	 logout : ()=>{
	 	
	 	    let user = localstorage.get('user')
	 	
	 	   if(!user){
	 	   	
	 	   	
	 	   }else{
	 	   	
	 	   	  localstorage.removeItem('user') 
	 	   	  
	 	   }
	 	 
	 },
	 request : (options)=>{
	 	
	 	  return new Promise((resolve,reject)=>{
	 	 	
	 	 	    fetch(`${REACT_APP_API}/register`)
	 	 	    .then((response)=>{
	 	 	    	 if(!response.user){
	 	 	    	 	 
	 	 	    	 	  reject({status: 'failed',failed:response})
	 	 	    	 	 
	 	 	    	 }else{
	 	 	    	 	
	 	 	    	 	 resolve(response)
	 	 	    	 }
	 	 	    	  
	 	 	    }) 
	 	 	    .catch((e)=>{
	 	 	    	
	 	 	    	 reject(e)
	 	 	    })
	 	 	
	 	  })
	 	 
	 },
	 
	
	
}