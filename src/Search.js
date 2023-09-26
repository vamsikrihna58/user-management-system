import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Search(){
  const [data,setData]=useState([]);
    
    const [title,setTitle]=useState('search by name')
   
    const [lable,setLable]=useState(' task name');
    const [plc,setPlc]=useState('enter task name')
    
      const ON=()=>{
       setTitle('Search by assigned')
       setPlc('Enter name of assigned person')
       setLable('Name')
      }
      const ONN=()=>{
        setTitle('search by name')
        setPlc('Enter name of task')
        setLable('task name')
       }
       const ONNN=()=>{
        setTitle('Search by Description')
        setPlc('Enter description')
       }
      const ONS=async(e)=>{
        e.preventDefault();
       const re=await axios.get('http://localhost:8080/alltasks');
      
       if(title==='search by name'){
        const stu=e.target.title.value;
        console.log(stu)
        const v=re.data.filter((e)=>{return e.title===stu})
      
        setData(v)
        if(data.length===0){
           alert('thers is no data on this task name')
        }
       }
       else if(title==='Search by assigned'){
        const stu=e.target.title.value;
        
        const v=re.data.filter((e)=>{return e.assignedto===stu})
        
        setData(v)
        if(data.length===0){
          alert('thers is no data on this person')
       }
       }
       else if(title==='Search by Description'){
        const stu=e.target.title.value;
        
        const v=re.data.filter((e)=>{return e.descripttion===stu})
        
        setData(v)
        if(data.length===0){
          alert('thers is no data on this description')
       }
       }
      
        }
      
    return(
      <div>
      <div className='container-fluid'>
        <div className='row mt-3'>
           <div className='col-md-6 m-auto'>
              <div className='card'>
              <div className='card-header bg-primary'>
   
               <h2>{title}</h2>
            </div>
            <div className='card-body bg-light'>
            <center>
          <form onSubmit={ONS}>
          <label>{lable}</label><br></br>
            <input type='text' className='form-control' name='title' placeholder={plc}></input>
              <input type="submit" name="submit"></input>
      </form>
      </center>
      </div>
      <div className='card-footer bg-info'>
            
               <button type="button" className="btn btn-danger" onClick={ONNN} >ByDescription</button>{" "}
               <button type="button" className="btn btn-danger" onClick={ON} >ByAssidned</button>{" "}
               <button type="button" className="btn btn-danger" onClick={ONN} >back for search by name</button>
            </div>
            <div className='card-footer bg-info'>
            
            <button type="button" className="btn btn-secondary " ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/home'>back</Link> </button>{" "}
         </div>
      </div>
      </div>
      </div>
      </div>
      <br></br><br></br><br></br>
       <div>
        
       <table className="table">
<thead className="thead-dark">
  <tr>
    <th scope="col">id </th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    <th scope="col">Duedate</th>
    <th scope="col">Status</th>
    <th scope="col">Assignedto</th>
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
export default Search