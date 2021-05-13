import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import CoolButton from './coolButton/CoolButton';
import FormField from './formfield/FormField'

const App = () => {
  return (
    <div>
      <Navbar />
      <CoolButton />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isLink isWarning className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;
