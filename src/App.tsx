import React, {FormEvent, useState} from 'react';
import './App.css';

enum Filter {
  ALL="All",
  EVEN="Even",
  ODD="Odd"
}

function App() {
  const [nums, setNums] = useState<number[]>([]);
  const [filter, setFilter] = useState(Filter.ALL);
  const [inputValue, setInputValue] = useState("");
  const filters = [Filter.ALL, Filter.EVEN, Filter.ODD];

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setNums([...nums, parseInt(inputValue)]);
    }
    setInputValue("");
  }

  function getFiltered() {
    switch (filter) {
      case Filter.ODD: return nums.filter(num => num % 2 !== 0);
      case Filter.EVEN: return nums.filter(num => num % 2 === 0);
      case Filter.ALL: return nums;
    }
  }

  return (
      <div className={"App"}>
        <form onSubmit={submitHandler}>
          <input
              type={"number"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
          />
          <button>+</button>
        </form>
        <div>
          {filters.map(item =>
            <label>
              <input
                  type={"radio"}
                  name={"filter"}
                  onChange={() => setFilter(item)}
                  defaultChecked={item === Filter.ALL}
              />
              {item}
            </label>)}
        </div>
        <br/>
        {getFiltered().join(", ")}
      </div>
  )
}

export default App;
