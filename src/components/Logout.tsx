import { doLogout } from '@/app/actions';
import React from 'react';

const Logout = () => {
    return (
        <form action={doLogout} className="">
            <button
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-none hover:bg-accent hover:text-accent-foreground h-10 px-4  text-white py-6 w-fit mt-5 hover:bg-red-600 focus:bg-red-600 focus:text-white"
            >
                Logout
            </button>
        </form>
    );
};

export default Logout;