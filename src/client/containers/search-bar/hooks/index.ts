// Dependencies
import React, { FormEvent } from 'react';
import { useRouter } from 'next/router';

// Interfaces
import { onChangeTextType, handleClickType } from './interfaces';

const useSearchProduct = (initialState = ''): [string, onChangeTextType, handleClickType] => {
  const router = useRouter();
  const [searchText, setSearchText] = React.useState<string>(initialState);

  const onChangeText = (event: FormEvent<HTMLInputElement>): void => {
    setSearchText(event.currentTarget.value);
  };

  const oNavigateToProductsList = (): void => {
    if (searchText) {
      const url = `/items?q=${searchText}`;
      router.push(url);
    }
  };

  const handleClick = (event: FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    oNavigateToProductsList();
  };

  return [searchText, onChangeText, handleClick];
};

export default useSearchProduct;
