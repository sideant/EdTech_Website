import Link from "next/link";
import LoginForm from "src/login/components/LoginForm";
import login from '../../public/assets/login.png'
import Image from "next/image";


export default function LoginPage() {
    return(
        <div className="grid-halves h-screen">
        <div className="border-right bg-offwhite">
            <div className="column-padding">
                <div className="tablet-centered">  
                <LoginForm/>
                </div>
            </div>
        </div>
        <div className="bg-navy border-right">
            <Image src={login} alt="login" className = "callout-image" />
        </div>
        </div>
    );
}
