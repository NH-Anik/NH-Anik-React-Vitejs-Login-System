import { Link } from 'react-router-dom';

const Lrgnavbar = () => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center font-bold">
                        <h1>NH-Anik : CI-CO</h1>
                    </Link>
                    <div className="flex md:order-2">
                      <Link to='/'  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign-in</Link>
                      <Link to='/registation' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">Sign-up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Lrgnavbar;