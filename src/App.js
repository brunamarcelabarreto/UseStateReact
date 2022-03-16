import React, {useState} from 'react';
import Switch from './components/Switch';


const initialState = {
  coffee: false,
  juice: false,
  tea: false
};

const App = () => {

  const [switches, setSwitches] = useState(initialState);


  const toggleSwitch= id => {
    const currentState= switches[id];
    if (currentState=== undefined) return;

    const activeSwitches= Object.values(switches).filter(value => value).length;

    const maxActive= Object.values(switches).length - 1;

    const newState= (activeSwitches === maxActive) ? initialState : switches;
      setSwitches({...newState, [id]: !currentState});
  };

  return (
    <div className="container">
      <h1>Escolha até duas opções:</h1>
      <Switch onClick={toggleSwitch} id="coffee" active={switches['coffee']} label="Café"/>
      <Switch onClick={toggleSwitch} id="juice" active={switches['juice']} label="Suco"/>
      <Switch onClick={toggleSwitch} id="tea" active={switches['tea']} label="Chá"/>
    </div>
  );
};

export default App;