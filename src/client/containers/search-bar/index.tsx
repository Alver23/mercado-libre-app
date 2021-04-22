// Dependencies
import { FC, ReactElement } from 'react';

// Hooks
import useSearchProduct from './hooks';

const SearchBar: FC = (): ReactElement => {
  const [searchValue, onChangeText, handleClick] = useSearchProduct();

  return (
    <form className="flex flex-row w-full">
      <input
        className="w-full rounded font-light rounded-r-none text-3xl text-gray-500 placeholder-gray-500 bg-white h-16 px-6 pr-6 focus:outline-none"
        type="text"
        name="search"
        value={searchValue}
        onChange={onChangeText}
        placeholder="Nunca dejes de buscar"
      />
      <button
        type="submit"
        className="focus:outline-none bg-gray-400 w-20 flex justify-center items-center"
        onClick={handleClick}
      >
        <img width={16} src="./assets/icon-search.png" alt="Search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
