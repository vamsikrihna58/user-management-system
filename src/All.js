
 import axios from "axios";
 import {  useState } from "react";


function All(){
    const [data,setData]=useState([]);
    const ON=async()=>{
        const re=await axios.get('http://localhost:8080/alltasks')
        setData(re.data)
        console.log("hii")
        console.log(data)

    }

     return(

<div> 
    <center>
    
    <button type="button" className="btn btn-danger" onClick={ON} >click for all task</button>{" "}<br></br><br></br><br></br>
    </center>
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
export default All