
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Updatetask(){
    const [user,setUser]=useState({
        id:'',
        title:'',
        description:'',
        date:'',
        name:'',
        status:''
    })
    const ONC=(e)=>{
        setUser({...user,[e.target.name]:[e.target.value]})
      }
      
      const student={
        id:'',
        title:'ghgh',
        descripttion:'ghgfh',
        duedate:'gf',
        assignedto:'fghgh',
        status:'complete'
      }
      const ONS=async(e)=>{
      
        e.preventDefault();
        student.id=e.target.id.value;
        student.title=e.target.title.value;
        student.descripttion=e.target.description.value;
        student.duedate=e.target.date.value;
        student.assignedto=e.target.name.value;
        student.status=e.target.status.value;
        console.log(student);
        const re=await axios.post('http://localhost:8080/updateTask',student);
        if(re.data==="no"){
        alert('no task is there on this id')
      }
      else{
        alert('data updated')
      }
      }
    return(

<div className='container-fluid'>
        <div className='row mt-5'>
           <div className='col-md-6 m-auto'>
              <div className='card'>
              <div className='card-header bg-primary'>
               <h2>Update Task</h2>
            </div>
            <div className='card-body bg-light'>
               <center>
            <form onSubmit={ONS}>
            <div className='form-group'>
               <label>Title id</label><br></br>
               <input type='text' className='form-control' name='id' placeholder='enter id for updation' value={user.id} onChange={ONC} ></input><br />
               </div>
               <div className='form-group'>
               <label>Title</label><br></br>
               <input type='text' className='form-control' name='title' placeholder='Enter update title' value={user.title} onChange={ONC} ></input><br />
               </div>
               <div className='form-group'>
              <label>description</label><br></br>
              <input type='text' className='form-control' name='description' placeholder='Enter update description' value={user.description} onChange={ONC}></input><br/><br></br>
              </div>
              <div className='form-group'>
              <label> update date</label><br></br>
              <input type='date' className='form-control' name='date' value={user.date} onChange={ONC} ></input><br/>
              </div>
              <div className='form-group'>
              <label> update Assigned to</label><br></br>
              <input type='text' className='form-control' name='name'placeholder='Enter updated name' value={user.name} onChange={ONC} ></input><br/>
              </div>
              <div className='form-group'>
              <label> update status</label><br></br>
              <input type='radio'  name='status' value='complete' onChange={ONC} ></input>complete{" "}
              <input type='radio'  name='status' value='incomplete' onChange={ONC} ></input>incomplete
              <br/><br></br>
              </div>
               
              <button>submit</button>
             
              </form>
             </center>
            </div>
           
            <div className='card-footer bg-info'>
            
            <button type="button" className="btn btn-secondary " ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/home'>back</Link> </button>{" "}
         </div>

       </div>
     </div>
                </div>
                </div>
   


    );
}
export default Updatetask