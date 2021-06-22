import React, {useEffect, useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';

const ThemeModeMap = {
  LIGHT_MODE: 'light',
  DARK_MODE: 'dark'
}

const {
  LIGHT_MODE,
  DARK_MODE,
} = ThemeModeMap

const ThemeClassMap = {
  [LIGHT_MODE]: 'light-mode',
  [DARK_MODE]: 'dark-mode'
}

const IconMap = {
  [LIGHT_MODE]: <FontAwesomeIcon icon={faMoon} />,
  [DARK_MODE]:  <FontAwesomeIcon icon={faSun} />,
}

function App() {
  const [mode, setMode] = useState(LIGHT_MODE)
  const htmlDom = document.querySelector('html')
  const htmlRef = useRef(htmlDom)

  function handleToggleMode() {
    const nextMode = mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
    
    setMode(nextMode)
    htmlRef.current.classList.remove(ThemeClassMap[mode])
  }

  useEffect(() => {
    htmlRef.current.classList.add(ThemeClassMap[mode])
  }, [mode])

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        <button className="app__dark-mode-btn icon level-right" onClick={handleToggleMode}>
          {IconMap[mode]}
        </button>

      </div>

      <div className="columns">
        <div className="column">
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
