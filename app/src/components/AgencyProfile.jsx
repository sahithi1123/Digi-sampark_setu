import axios from "axios"
import { useEffect, useState } from "react"


function AgencyProfile() {
    const [profile,setprofile] =useState({})
    useEffect(()=>{
        const fetchprofile = async()=>{
            try{
                const res=await axios.get("http://localhost:8082/api/agency/profile")
                setprofile(res.data);
                console.log(res.data);
            } 
            catch(err){
                console.log(err)
            }
        }
        fetchprofile();
    },[])
    return (
        <><h2>User Profile</h2>
            <p>AgencyName:{profile.agencyName}</p>
            <p>AgencyType:{profile.agencyType}</p>
            <p>ContactPerson:{profile.contactPerson}</p>
            <p>Designation:{profile.designation}</p>
            <p>Email:{profile.email}</p>
            <p>Phone:{profile.phone}</p>
            <p>Address:{profile.address}</p>
        </>
    )
}

export default AgencyProfile