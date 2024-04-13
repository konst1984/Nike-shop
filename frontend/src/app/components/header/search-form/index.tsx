import React, { FC, FormEventHandler } from 'react';
import SearchIcon from '@/assets/SearchIcon';
import { VscChromeClose } from 'react-icons/vsc';
import ButtonCircle from '@/app/ui/Buttons/ButtonCircle';

interface ISearchForm extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    setSearchValue: (value: string) => void;
    searchBarOpen: boolean;
    setSearchBarOpen: (value: boolean) => void;
    desktop?: boolean;
}
const SearchForm: FC<ISearchForm> = ({
    value,
    setSearchValue,
    searchBarOpen,
    setSearchBarOpen,
    desktop = true,
}) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        if (!searchBarOpen) {
            setSearchBarOpen(true);
        }
    };

    const handleClose = () => {
        setSearchBarOpen(false);
        setSearchValue('');
    };

    return (
        <>
            <form
                className={`relative flex h-full ${searchBarOpen ? 'm-auto w-[85%]' : desktop ? 'w-44' : 'w-10'} items-center transition-all duration-200`}
            >
                <ButtonCircle
                    title="Search"
                    type="button"
                    className={`absolute left-0 block h-9 w-9 ${searchBarOpen ? 'flex-c-c' : 'hidden'} hover:bg-gray-300 focus-visible:bg-gray-300`}
                >
                    <SearchIcon />
                </ButtonCircle>
                <ButtonCircle
                    title="Open search bar"
                    type="button"
                    className={`absolute left-1 h-9 w-9 ${searchBarOpen ? 'hidden' : 'flex-c-c'}`}
                    onClick={() => setSearchBarOpen(true)}
                >
                    <SearchIcon />
                </ButtonCircle>
                <ButtonCircle
                    title="Clear search query"
                    className={`absolute right-0 h-10 w-10 p-2 ${value ? 'flex-c-c' : 'hidden'}`}
                    type="button"
                    onClick={() => setSearchValue('')}
                >
                    <VscChromeClose size={24} />
                </ButtonCircle>
                <label
                    className={`${desktop || searchBarOpen ? 'w-full' : 'w-0'} flex items-center transition-all duration-200`}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={onChangeHandler}
                        className={`h-10 w-full rounded-3xl bg-gray-100 ${desktop || searchBarOpen ? 'pl-12 pr-9' : 'px-0'} placeholder:text-gray-300 hover:bg-gray-200 hover:placeholder:text-zinc-400 focus:bg-gray-200 focus:outline-none focus:placeholder:text-zinc-400 hover:focus:outline-none`}
                    />
                </label>
            </form>
            <button
                title="Close search bar"
                className={` ${searchBarOpen ? 'block' : 'hidden'} text-md ml-auto rounded-2xl border border-transparent px-3 py-1 font-semibold hover:border-black focus-visible:border-black`}
                onClick={handleClose}
            >
                Cancel
            </button>
        </>
    );
};

export default SearchForm;
