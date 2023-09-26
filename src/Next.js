
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Next(){
    const nav=useNavigate();
   // const navigate=useNavigate();
    const [user,setuser]=useState({
       name:'',
       password:''
       
    })
     const student={
       name:"ggtntrhthjfjfj",
       password:"dfgn",
      
     }
     const ONC=(e)=>{
       setuser({...user,[e.target.name]:[e.target.value]})
     }
     const ONS=async(e)=>{
        e.preventDefault();
     
     student.name=e.target.name.value;
     student.password=e.target.password.value;
     console.log(student);
    let re= await axios.get('http://localhost:8080/get');
    console.log(re);
    console.log(re.data.length);
    for(let i=0;i<re.data.length;i++){
      let can=re.data[i];
      if(can.name===student.name && can.password===student.password){
        return nav('/home')
      }
      
    }
     alert('Sorry invalid input or invalid password');
  
     }
      
   

    return(
        <div className='container-fluid'>
        <div className='row mt-5'>
           <div className='col-md-6 m-auto'>
              <div className='card'>
        <div className='card-header bg-primary'>
               <h2>Login</h2>
            </div>
            <div className='card-body bg-light'>
               <center>
            <form onSubmit={ONS}>
               <div className='form-group'>
               <label>Name</label><br></br>
               <input type='text' className='form-control' name='name' placeholder='username' value={user.name} onChange={ONC} ></input><br /><br></br>
               </div>
               <div className='form-group'>
              <label>Password</label><br></br>
              <input type='text' className='form-control' name='password' placeholder='password' value={user.password} onChange={ONC}></input><br/><br></br>
              </div>
              
               
              <button>submit</button>
             
              </form>
             </center>
            </div>
            
            <div className='card-footer bg-info'>
               <h6>If you are not a registerd canidate then please sogn up</h6>
               <button type="button" className="btn btn-danger"onClick={()=>nav('/login')} >sign Up</button>
            </div>
            </div> 

         </div>

      </div>

     </div>

           
    );
}
export default Next