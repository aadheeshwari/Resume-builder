import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Personal_Details() {

const[lname , setLname] = useState("")
const[fname , setFname] = useState("")
const[email , setEmail] = useState("")
const[phone , setPhone] = useState("")
const[web , setWeb] = useState("")
const[linkedin , setLinkedin] = useState("")
const[insta , setInsta] = useState("")
const[git , setGit] = useState("")
const[details , setDetails] = useState([])

const navigate = useNavigate()

const getdetails = () => {
     
// console.log("yes working")
const data = {
    first_name : lname,
    last_name : fname,
    email : email,
    mobile : phone,
    website : web,
    linkedin : linkedin,
    Instagram : insta,
    github : git, 
}

setDetails([...details , data])
setFname("")
setLname("")
setEmail("")
setPhone("")
navigate("education")
}

  return (
    // <div>Personal_Details</div>
    <>
    <div>
        {/* {details.length > 0 && console.log(details)} */}
        <h4>Personal Details</h4>
        <input placeholder='first name' value={fname} onChange={(e) => setFname(e.target.value) }/>
        <input placeholder='last name'value={lname} onChange={(e)=> setLname(e.target.value)}/>
        <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value) }/>
        <input placeholder='phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input placeholder='your website' value={web} onChange={(e => setWeb(e.target.value) )}/>
        <input placeholder='github' value={git} onChange={(e) => setGit(e.target.value) }/>
        <input placeholder='linked In' value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
        <input placeholder='insta' value={insta} onChange={(e) => setInsta(e.target.value)}/>

        <button onClick={getdetails}> Sumit & Next </button>
    </div>
    </>
  )
}

export default Personal_Details