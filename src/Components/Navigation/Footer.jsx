

const Footer = () => {

    const now = new Date();
    const thisYear = now.getFullYear();

    return (
        
        <footer className='py-5 mt-3 sticky bg-primary
        inset-x-0 top-full'>
            <div className="flex justify-between flex-wrap w-full container mx-auto md:w-3/4">
                <div>

                </div>
                <div>
                    <span className="text-center">
                        All Rights Reserved &copy; {thisYear}
                    </span>
                </div>
                <div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;