import{useState,useEffect,useRef} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

export default function Update()
{
const rRno=useRef();
const[rno,setRno]=useState("");
const[name,setName]=useState("");
const[marks,setMarks]=useState("");
const[ans,setAns]=useState("");

const hRno=(event)=>{setRno(event.target.value);}
const hName=(event)=>{setName(event.target.value);}
const hMarks=(event)=>{setMarks(event.target.value);}

const loc=useLocation();

useEffect(()=>{
setRno(loc.state.r);
setName(loc.state.n);
setMarks(loc.state.m);
},[]);

const save=(event)=>{
event.preventDefault();
let data={rno,name,marks};
let url="http://localhost:9000/modify";
axios.put(url,data)
.then(res=>{
if(res.data.affectedRows==1)
{
setAns("Record Updated");
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
<h1> Update Page </h1>
<form onSubmit={save}>
<input type="number" placeholder="Enter roll no" onChange={hRno} value={rno} ref={rRno} disabled={true}/>
<br/><br/>
<input type="text" placeholder="Enter name" onChange={hName} value={name}/>
<br/><br/>
<input type="number" placeholder="Enter marks" onChange={hMarks} value={marks}/>
<br/><br/>
<input type="submit" value="Update"/>
<br/><br/>
</form>
<h2>{ans}</h2>
</center>
</>
);
}

