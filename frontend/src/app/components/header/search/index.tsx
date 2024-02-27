import SearchIcon from '@/assets/SearchIcon';
import React from 'react';

const Search = () => {
    return (
        <div className="relative flex h-full w-44 items-center">
            <span className="h12 absolute left-0 block w-12 p-3">
                <SearchIcon />
            </span>
            <label>
                <input
                    type="search"
                    placeholder="Search"
                    className="h-10 w-full rounded-3xl bg-gray-100 px-9 pl-12 placeholder:text-gray-300 hover:bg-gray-200 hover:placeholder:text-zinc-400 focus:bg-gray-200 focus:outline-none focus:placeholder:text-zinc-400 hover:focus:outline-none  "
                />
            </label>
        </div>
    );
};

export default Search;
