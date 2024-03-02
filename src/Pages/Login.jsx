import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    }) 

   function validateForm(){
        let valid = true

        if(!formData.email.trim()){
            valid = false
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            valid = false
        }

        if(!formData.password.trim()){

            valid = false;
        }

        return valid;
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if (validateForm){
            try{
                const response = await fetch()
                const users = await response.json()
                const user = users.find(u => u.email === formData.email && u.password === formData.password)
    
                if (user){
                    console.log("Succesfully logged in!")
                    navigate("/")
                }else{
                    console.log("Details not found")
                }
            }catch(error){
                console.log('Error:', error);
            }
        }else{
            console.log("invalid form data")
        }
    }
    function handleChange(e){
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    return(

        <div className="log-in">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type="email" 
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Log in</button>
                <p className="form-text">Dont have an account?<span id="create-account">Create account</span></p>
            </form>
        </div>
    )
}
export default Login