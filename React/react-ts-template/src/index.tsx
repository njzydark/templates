import ReactDOM from 'react-dom';

import 'tailwindcss/tailwind.css';

import logo from './public/logo.png';

import { Button } from './Demo/Button';
import { Button as StyledButton } from './Demo/StyledButton';

const App = () => (
  <div className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center">
    <img src={logo} />
    <p className="text-3xl mb-8">React TS Template</p>
    <div className="flex space-x-2">
      <Button
        primary
        onClick={() => window.open('https://github.com/njzydark/templates/tree/master/React/react-ts-template')}
      >
        GitHub
      </Button>
      <StyledButton>Github</StyledButton>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
