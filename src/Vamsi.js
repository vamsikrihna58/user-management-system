import { Link } from "react-router-dom"

function Vamsi(){
    return (
        <div>
        <center>
             <div>
                <br></br><br></br>
               <h3>welcome user please go through the given options</h3>
            </div>
        </center>
        <br></br> <br></br>
        <center>
        <div>
        <button type="button" className="btn btn-primary " ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/create'>Create task</Link> </button>{" "} 
        <button type="button" className="btn btn-secondary" ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/update'>update task</Link></button> {" "} 
        <button type="button" className="btn btn-danger" ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/delete'>Delete task</Link></button> {" "} 
        <button type="button" className="btn btn-success" ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/search'>Search for task</Link></button> {" "} 
        <button type="button" className="btn btn-info" ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/filter'>Filter task</Link></button>{" "}
        <button type="button" className="btn btn-secondary" ><Link style={{textDecoration: 'none',color: '#FFF'}} to='/all'>All tasks</Link></button>
        </div>
        </center>
        </div>
    )
}
export default Vamsi