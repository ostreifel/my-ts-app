import { JSX, useRef, useState } from 'react';
import './SearchBox.css';

interface SearchBoxProps {
  searchUpdated: (query: string) => void;
  value?: string;
}

function SearchBox({value, searchUpdated}: SearchBoxProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  function handleBlur() {
    if (!searchInput.current?.value) {
      setIsOpen(false);
    }
  }

  function inputChanged() {
    searchUpdated(searchInput.current?.value ?? '');
  }


  return isOpen ? (
    <input
      autoFocus
      className='SearchBox'
      onBlur={handleBlur}
      onKeyDown={inputChanged}
      onChange={inputChanged}
      placeholder='Enter search query'
      ref={searchInput}
      value={value}></input>
  ) : (
    <button className='SearchBoxButton' onClick={() => setIsOpen(true)}>🔎</button>
  );

}

export default SearchBox;