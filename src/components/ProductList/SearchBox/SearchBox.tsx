import { JSX, useRef, useState } from 'react';
import './SearchBox.css';

interface SearchBoxProps {
  searchUpdated: (query: string) => void;
}

function SearchBox({searchUpdated}: SearchBoxProps): JSX.Element {
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
      className='SearchBox'
      placeholder='Enter search query'
      ref={searchInput}
      onBlur={handleBlur}
      onKeyDown={inputChanged}
      onChange={inputChanged}
      autoFocus></input>
  ) : (
    <button className='SearchBoxButton' onClick={() => setIsOpen(true)}>🔎</button>
  );

}

export default SearchBox;