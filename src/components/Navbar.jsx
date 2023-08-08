import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {

    const { user, logOutUser } = useContext(AuthContext);

    const getToken = () => {
        return localStorage.getItem('authToken')
      }
    
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
      {getToken() && (
        <>
            <Link to="/politicians/all-politicians">
                <button>All Politicians</button>
            </Link>
            {user && 
                <Link to='politicians/my-politicians'>
                    <button>My Politicians</button>
                </Link>  
            }      
                
            <span>{user && <span>Welcome {user.username}!</span>}</span>
            <button onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!getToken() && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;