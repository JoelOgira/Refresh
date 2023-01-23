import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='bg-primary top-0 z-50 sticky py-5 mb-3'>
            <div className="flex justify-between items-center flex-wrap text-white md:w-3/4 container mx-auto">
                <h1 className='text-white text-4xl font-semibold'>
                    Refresh
                </h1>
                <div className="inline-flex space-x-4">
                    <Link to="/" className="hover:text-secondary">
                        Home
                    </Link>
                    <Link to="/bikes" className="hover:text-secondary">
                        Bikes
                    </Link>
                    <Link to="/cats" className="hover:text-secondary">
                        Cats
                    </Link>
                    <Link to="/agify" className="hover:text-secondary">
                        Agify
                    </Link>
                    <Link to="/superheroes" className="hover:text-secondary">
                        Superheroes
                    </Link>
                    <Link to="/rqsuperheroes" className="hover:text-secondary">
                        RQSuperheroes
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;