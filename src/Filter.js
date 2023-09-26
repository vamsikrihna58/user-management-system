
import axios from "axios";
import {  useState } from "react";

import { Link } from "react-router-dom";



function Filter(){
  const [user,setUser]=useState(
   {title:''}
  );
  const [title,setTitle]=useState('serch by status')
  const [lable,setlable]=useState('enter stauts')
  

  const [data,setData]=useState([]);
    
    const ONC=(e)=>{
     setUser({...user,[e.target.name]:[e.target.value]})
    }
    
   const ON=()=>{
      setTitle("by duedate");
      setlable("enter date")
   }

   const ONS=async(e)=>{
      e.preventDefault();
    const re=await axios.get('http://localhost:8080/alltasks')
     console.log(re)
     if(title==='serch by status'){
      const student=e.target.status.value
      console.log(student)
    const v=re.data.filter((e)=>{return e.status===student})
      
      console.log(v)  
     setData(v)
     console.log(data)
     }
     else if(title==='by duedate'){
      const student=e.target.title.value
const v= re.data.filter((e)=>{return e.status===student})
console.log(v);
setData(v);
console.log(data)
     }
   }

    return(
      <div>
<div className='container-fluid'>
        <div className='row mt-5'>
           <div className='col-md-6 m-auto'>
              <div className='card'>
              <div className='card-header bg-primary'>
   
               <h2>{title}</h2>
            </div>
            <div className='card-body bg-light'>
               <center>
            <form onSubmit={ONS}>
               {title==='serch by status'? <div className='form-group'>
              <label>status</label><br></br>
              <input type='radio'  name='status' value='complete' onChange={ONC} ></input>complete{" "}
              <input type='radio'  name='status' value='incomplete' onChange={ONC} ></input>incomplete
              <br/><br></br>
              </div>
               :<div className='form-group'>
               <label>{lable}</label><br></br>
               <input type='date' className='form-control' name='title' placeholder="enter" value={user.title} onChange={ONC} ></input><br />
              
               </div>}
              
               <button>submit</button>
               </form>
              </center>
              </div>
              <div className='card-footer bg-info'>
            
               <button type="button" className="btn btn-danger" onClick={ON} >ByDuedate</button>{" "}
               <button type="button" className="btn btn-danger" onClick={()=>setTitle('serch by status')} >back</button>
            </div>
            <div className='card-footer bg-info'>
            
            <button type="button" className="btn btn-secondary"><Link style={{textDecoration: 'none',color: '#FFF'}} to='/home'>back</Link> </button>{" "}
         </div>
              </div>
         </div>
      </div>
</div>


         <div>
        
         <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">id </th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Duedate</th>
      <th scope="col">Status</th>
      <th scope="col">ssignedto</th>
    </tr>
  </thead>
            <tbody>
            
            {
                       data.map((val)=>(
                       <tr>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.descripttion}</td>
                        <td>{val.duedate}</td>
                        <td>{val.status}</td>
                        <td>{val.assignedto}</td>
                     </tr>
                       ))
                  } 
          
            </tbody>
         </table>
        </div>


</div>




    );
}
export default Filter