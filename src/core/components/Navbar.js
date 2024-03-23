import Link from "next/link";
import LoginForm from "src/login/components/LoginForm";


export default function Navbar() {
    return (
        <div className="nav-container border-b-2 border-black">
            <Link href=" /">
                Home Page
            </Link>
            <div className="nav-menu">
                <Link href ="/login" className="nav-link white">
                    <div>Login</div>
                </Link>
                <Link href = "/pricing" className="nav-link black">
                    <div>Pricing</div>
                </Link>
            </div>
    
        </div>
    )
    }

