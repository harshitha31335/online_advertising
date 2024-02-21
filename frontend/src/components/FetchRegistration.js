import React, {useEffect, useState} from 'react' 
import axios from 'axios' 
const FetchRegistration = () => { 
const [formData, setFormData]=useState({  
  name:'', role:'', email:'', password:''}) 
  
 
    const [res,setRes]=useState([]) 
     
 
 
const fetchData= async ()=>{  
  await axios.get('http://localhost:8080/retrieve')  
  .then(response=>{  
     setRes(response.data)  
     console.log(Response.data)  
  })}  
  useEffect(()=>{  
   fetchData()  
  },  
   []) 
const updateData=async(id)=>{  
    console.log(id)  
  const res=await axios.put( `http://localhost:8080/users/${id}`, formData)  
  fetchData();  
  console.log(res.data)  
  }  
  const handleDelete=async (id)=>{ 
    await axios.delete(`http://localhost:8080/users/${id}`) 
    .then(response=>{ 
      console.log(response.data) 
    }) 
    fetchData()
  }
  const changeHandler=(e)=>{  
    setFormData({...formData, [e.target.name]: e.target.value});  
  }; 
    
return( 
    <div><center><h1>Registrations</h1> 
    <table border={1}> 
        <tr> 
            <th>ID</th> 
            <th>ROLE</th> 
            <th>EMAIL</th> 
            <th>PASSWORD</th> 
            </tr>{ 
                res.map((item,index)=>( 
                    <tr key={index}> 
                        <td>{item._id}</td> 
                        <td>{item.name}</td> 
                        <td>{item.role}</td> 
                        <td>{item.email}</td> 
                        <td>{item.password}</td> 
                        <td><input type='text' name='name'   
                         placeholder='New Name'   
                         onChange={changeHandler}/>  
                         <input type='text' name='r0le'   
                        placeholder='New Role'   
                        onChange={changeHandler}/>  
                       <input type='text' name='email'   
                       placeholder='New Email'   
                       onChange={changeHandler}/>  
                       <input type='password' name='password'   
                       placeholder='New Password'   
                       onChange={changeHandler}/>  
                       <button onClick={()=>updateData(item._id)}>update</button> 
                       <button onClick={()=>handleDelete(item._id)}>delete</button> 
                       </td> 
                    </tr> 
                )) 
            } 
            </table></center></div> 
 ) 
 
} 
export default FetchRegistration
