import Google from "../img/google.png";
import FaceBook from "../img/facebook.png";
import LinkedIn from "../img/linkedin.png";


const Login = () => {
    const google = () =>{
        window.open("http://localhost:5000/auth/google", "_self")
    };
    
    // const facebook = () =>{
    //     window.open("http://localhost:5000/auth/facebook", "_self")
    // };
    
    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">

                    <div className="loginButton facebook" >
                        <img src={FaceBook} alt="" className="icon"/>
                        Continue with FaceBook
                    </div>
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon"/>
                        Continue with Google
                    </div>
                    <div className="loginButton linkedin">
                        <img src={LinkedIn} alt="" className="icon"/>
                        Continue with LinkedIn
                    </div>
                <div className="line"/>
                {/*<div className="or">OR</div>*/}
                <div className="email">
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="password">
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="submit">
                    <button className="submit">Login</button>
                </div>
                <div className="forgot">
                    <p>Forgot Password?</p>
                </div>
                <div className="signup">
                    <p>Don't have an account? Sign up</p>
                </div>
            </div>
        </div>
    )

}
export default Login;