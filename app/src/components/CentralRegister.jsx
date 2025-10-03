import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CentralRegister() {
  const nav = useNavigate();
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
      const result= await axios.post("http://localhost:8082/api/central/register",form);
      console.log(result.data);
      alert(result.data);
      nav("/centraldash")
    }
    catch(e){
      console.log(e.response.data);
      alert(e.response.data);
    }  
  }
  return (
    <>
    <form onSubmit={submit}>
    <label>Email</label>
    <input name="email" type="email" placeholder="Enter email" onChange={change}/><br/>
    <label>Password</label>
    <input name="password" type="password" placeholder="Enter Password" onChange={change}/><br/>
    <button type="submit" > Register </button>
    </form>
    </>
  )
}

export default CentralRegister