
import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);

    const handleClick = () => {
    inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type something..." />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}


