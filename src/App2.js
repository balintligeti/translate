import React, {useState, useEffect} from 'react';

function App() {


  const [merchants, setDictionaries] = useState(false);
  useEffect(() => {
    getDictionaries();
  }, []);


  function getDictionaries() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setDictionaries(data);
      });
  }


  function addWord() {
    let foreign = prompt('Enter foreign word');
    let en = prompt('Enter eng word');
    fetch('http://localhost:3001/dictionaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({foreign, en}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        getDictionaries();
      });
  }


  function deleteWord() {
    let id = prompt('Enter word id');
    fetch(`http://localhost:3001/dictionaries/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getDictionaries();
      });
  }

  
  return (
    <div>
      {merchants ? merchants : 'There is no dictionary data available'}
      <br />
      <button onClick={addWord}>Add word</button>
      <br />
      <button onClick={deleteWord}>Delete word</button>
    </div>
  );
}
export default App;