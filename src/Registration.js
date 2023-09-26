 
 
 //import { useState } from 'react';
 //import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Registration.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


 function Registration(){
   
   const [user,setuser]=useState({
      name:'',
      password:'',
      phone:''
   })
    const student={
      name:"ggtntrhthjfjfj",
      password:"dfgn",
      phone:""
    }
    const ONC=(e)=>{
      setuser({...user,[e.target.name]:[e.target.value]})
    }
     
     let re='';
     let nav=useNavigate();
     
    const ONS=async(e)=>{
      
     e.preventDefault();
     
     student.name=e.target.name.value;
     student.password=e.target.password.value;
     student.phone=e.target.phone.value;
    
      console.log(student);
      student.name=e.target.name.value;
      student.password=e.target.password.value;
      student.phone=e.target.phone.value;
      
    re= (await axios.get('http://localhost:8080/get'));
    console.log(re.data.length);
    for(let i=0;i<re.data.length;i++){
      let can=re.data[i];
      if(can.name===student.name || can.password===student.password){
         return alert('username or password already taken')
      }
      
    }
     await axios.post('http://localhost:8080/save',student)
     return nav('/home')
   }
   
   const ONCC=()=>{
      return nav('/Next')
      

   }
  //const navigate=useNavigate();
   
    return(
     <div className='container-fluid'>
      <div className='row mt-5'>
         <div className='col-md-6 m-auto'>
            <div className='card'>
            <div className='card-header bg-primary'>
               <h2>sign Up</h2>
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
              <div className='form-group'>
              <label>Phone number</label><br></br>
              <input type='text' className='form-control' name='phone' placeholder='phone number' value={user.phone} onChange={ONC} ></input><br/><br></br>
              </div>
               
              <button>submit</button>
             
              </form>
             </center>
            </div>
           
            <div className='card-footer bg-info'>
               <h6>If you are already registerd canidate then login</h6>
               <button type="button" className="btn btn-danger"onClick={ONCC} >Login</button>
            </div>
            </div> 

         </div>

      </div>

     </div>

    );
 }
 export default Registration