import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function CentralLogin() {
  const nav=useNavigate();
  const [form,setform] =useState({
    email:"",
    password:""
  })
  const change = (e) =>{
    setform({...form,[e.target.name]:e.target.value});
  }
  const submit = async(e) =>{ 
    e.preventDefault();
    try{
      const result= await axios.post("http://localhost:8082/api/central/login",form);
      console.log(result.data);
      alert(result.data);
      nav('/centraldashboard')
    }
    catch(e){
      console.log(e.response.data);
      alert(e.response.data);
    }
    
  }
  return (
    <>
    <form onSubmit={submit}>
    <label>username</label>
    <input name="username" type="text" placeholder="Enter username" onChange={change}/>
    <label>Password</label>
    <input name="password" type="password" placeholder="Enter Password" onChange={change}/>
    <button type="submit" > Login </button>
    </form>
    </>
  )
}

export default CentralLogin