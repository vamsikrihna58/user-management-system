import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Delete(){
    const [user,setUser]=useState('');
    const ONC=(e)=>{
        setUser(e.target.name.value);
      }
      let student={id:''};
      const ONS=async(e)=>{
      
        e.preventDefault();
        student.id=e.target.title.value;
        console.log(student)
        const re= await axios.post('http://localhost:8080/delete',student);
        if(re.data==="no"){
            alert('no task is there on this id')
          }
          else{
            alert('data deleted')
          }
      }
    return(

<div className='container-fluid'>
        <div className='row mt-5'>
           <div className='col-md-6 m-auto'>
              <div className='card'>
              <div className='card-header bg-primary'>
               <h2>Delete Task</h2>
            </div>
            <div className='card-body bg-light'>
               <center>
            <form onSubmit={ONS}>
               <div className='form-group'>
               <label>Title id</label><br></br>
               <input type='number' className='form-control' name='title' placeholder='Enter Title id' value={user} onChange={ONC} ></input><br />
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


    )
}
export default Delete