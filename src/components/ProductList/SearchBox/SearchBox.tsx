import { useState } from 'react';

import './SearchBox.css'

function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return <div className='SearchBox'>searching</div>;
  } else {
    return <button className='SearchBoxButton'>🔎</button>;
  }

}

export default SearchBox;