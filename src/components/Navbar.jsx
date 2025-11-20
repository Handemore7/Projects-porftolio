import { Link } from "react-router-dom"
import Button from "./Button"

function Navbar() {

    return (
        <>
            <header className="flex flex-row justify-between items-center pb-2 fixed top-0 left-0 p-4 w-full bg-blue-primary">
                <h2 className='text-white text-2xl font-bold'>My projects</h2>
                <nav>
                    <ul className="flex flex-row gap-4">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/Projects'><li>Projects</li></Link>
                        <Link to='Contact'><li>Contact</li></Link>
                    </ul>
                </nav>
                <Button text="Get in touch" onClick={() => { alert('Button clicked!') }} />
            </header>
        </>
    )
}

export default Navbar