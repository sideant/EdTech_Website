export default function LoginForm() {
    return(
        <form className = "content-grid home-hero">
            <h1>Welcome Back</h1>
             <div className="email-input">
            <label htmlFor="email">Enter Email</label>
             <input id="email" type="email" name="email" />
             </div>
        <button type ="submit" className="large-button">
            <div className="large-button-text">
                Login
            </div>
        </button>
        </form>
      
        
    )
}
