import React , {useState} from 'react'

function Education_input() {

const [school , setSchool] = useState("")
const [startdata , setStartdata] = useState("")
const [enddata , setEnddata] = useState("")
const [percen , setPercen] = useState("")
const [qua , setQua] = useState("")
const [edudetails , setEdudetails] = useState([])

const setdetails = () => {
const data = {
Instname : school, 
startdata : startdata,
finaldata : enddata,
percentage : percen,
qualification : qua,
}

setEdudetails([...edudetails , data])
}

  return (
<>
<div>
  { edudetails.length > 0 && console.log(edudetails)}
    <input placeholder='School or college/univercity' value={school} onChange={(e) => setSchool(e.target.value)}/>
    <input type='date' placeholder='Startdate' value={startdata} onChange={(e) => setStartdata(e.target.value)}/>
    <input type='date' placeholder='Enddate' value={enddata} onChange={(e) => setEnddata(e.target.value)}/>
    <input placeholder='Qualification' value={qua} onChange={(e) => setQua(e.target.value)}/>
    <input placeholder='percentage' value={percen } onChange={(e) => setPercen(e.target.value)}/>
</div>
<br/>
<hr/>
<br/>
{/* <button >Back</button>
<button onClick={setdetails}>save & Next</button> */}

</>
    )
}

export default Education_input