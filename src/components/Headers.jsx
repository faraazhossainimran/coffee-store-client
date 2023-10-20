import { NavLink } from "react-router-dom"


const Headers = () => {
    return (
        <div className="mr-4">
            <NavLink className="mr-4" to="/">Home</NavLink>
            <NavLink className="mr-4" to="/users">Users</NavLink>
            <NavLink className="mr-4" to="/signup">Signup</NavLink>
            <NavLink className="mr-4" to="/signin">Sign in</NavLink>
        </div>
    )
}

export default Headers