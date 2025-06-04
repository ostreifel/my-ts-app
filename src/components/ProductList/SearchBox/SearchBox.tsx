import { useRef, useState } from 'react';
import './SearchBox.css';

/**
 * SearchBox is a component that provides a search input field and a button to toggle its visibility.
 */
function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    if (!searchInput.current?.value) {
      setIsOpen(false);
    }
  }


  return isOpen ? (
    <input className='SearchBox' placeholder='Enter search query' ref={searchInput} onBlur={handleBlur} autoFocus></input>
  ) : (
    <button className='SearchBoxButton' onClick={() => setIsOpen(true)}>🔎</button>
  );

}

export default SearchBox;