
//import Registration from './Registration';
import { Link } from 'react-router-dom';



function Welcome(){
  
  
  return(
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <h1>Muster Dekho</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
       
        <Link to="/login" > <button type="button" className="btn btn-success">click Here </button></Link>
    </li>
        
      </ul>
    </div>
</nav>

<br></br><br></br><br></br><br></br><br></br>
 
    </div>
    );
}
export default Welcome