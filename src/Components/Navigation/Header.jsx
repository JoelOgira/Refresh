import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='bg-primary top-0 z-50 sticky py-5 mb-3'>
            <div className="flex justify-between items-center flex-wrap md:w-3/4 container mx-auto">
                <h1 className='text-white text-4xl font-semibold'>
                    Refresh
                </h1>
                <div className="inline-flex space-x-4">
                    <Link to="/bikes" className="hover:text-secondary">
                        Bikes
                    </Link>
                    <Link to="/cats" className="hover:text-secondary">
                        Cats
                    </Link>
                    <Link to="/agify" className="hover:text-secondary">
                        Agify
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;