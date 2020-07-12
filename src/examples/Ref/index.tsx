import React, { useState, useRef } from "react";

const Ref: React.FC = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([] as any);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleAddNames() {
    if (!name) {
      return;
    }

    setNames((currentNames: any) => [...currentNames, name]);
    setName("");
    (inputRef as any).current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={handleInputChange}
        placeholder="Nome"
      />
      <button onClick={handleAddNames}> Adicionar Nome</button>

      <ul>
        {names.map((name: any) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ref;
