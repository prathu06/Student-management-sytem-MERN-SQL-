import{useState,useRef} from "react";

import axios from "axios";

export default function Create()
{
const rRno=useRef();
const[rno,setRno]=useState("");
const[name,setName]=useState("");
const[marks,setMarks]=useState("");
const[ans,setAns]=useState("");

const hRno=(event)=>{setRno(event.target.value);}
const hName=(event)=>{setName(event.target.value);}
const hMarks=(event)=>{setMarks(event.target.value);}


const save=(event)=>{
event.preventDefault();
let data={rno,name,marks};
let url="http://localhost:9000/save";
axios.post(url,data)
.then(res=>{
if(res.data.affectedRows==1)
{
setAns("Record Created");
setRno("");
setName("");
setMarks("");
rRno.current.focus();
}
if(res.data.errno==1062)
{
setAns("Rno already exists");
setRno("");
rRno.current.focus();
}
})
.catch(err=>setAns("issue "+err));
}

return(
<>
<center>
<h1> Create Page </h1>
<form onSubmit={save}>
<input type="number" placeholder="Enter roll no" onChange={hRno} value={rno} ref={rRno}/>
<br/><br/>
<input type="text" placeholder="Enter name" onChange={hName} value={name}/>
<br/><br/>
<input type="number" placeholder="Enter marks" onChange={hMarks} value={marks}/>
<br/><br/>
<input type="submit" value="Save"/>
<br/><br/>
</form>
<h2>{ans}</h2>
</center>
</>
);
}

