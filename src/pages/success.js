import Image from "next/image"
import confetti from '../../public/assets/confetti.png'
import Link from "next/link"

export default function SuccessPage() {
    return(
        <div className="section bg-pink h-screen">
            <div className="container">
                <div className="section-intro welcome">
                    <Image 
                        src={confetti}
                        height={200}
                        width={200}
                        alt="confetti"
                        className="confetti"
                    />
                    <h1> You are in!</h1>
                    <p>You can now access the website!. <br /> Yay! Get Started?</p>
                    <Link href='/login' className="large-button">
                        <div className="large-button-text"> AWESOME! Grade 20/20!! <br /> Login</div>
                    </Link>
                </div>
            </div>
        </div>

    )

}
