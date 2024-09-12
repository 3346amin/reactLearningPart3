import { useRef, useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const input = useRef();

  function handleClick() {
    setEnteredPlayerName(input.current.value);
    input.current.value = '';
  }

  return (
    <section id='player'>
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}
      </h2>
      <p>
        <input
          ref={input}
          type='text'
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
