import React from 'react';
import { render } from 'react-dom';
import { Stories, Story, Props } from 'neutrino-preset-react-components/lib';
import Welcome from './components/Welcome';
import Alert from './components/Alert';

const root = document.getElementById('root');

render((
  <Stories>
    <Story component={Welcome}>
      <Props name="Default" />
      <Props name="State A" someProp="alpha" />
      <Props name="State B w/ children">Child!</Props>
    </Story>
    <Story component={Alert}>
      <Props name="Default" show={true} title='Hello World!' type={Alert.types.DANGER} onClose={() => console.log('nope!')}>Shit is florida</Props>
      <Props name="Large" show={true} title='Hello World!' type={Alert.types.DANGER} onClose={() => console.log('nope!')} largeAlert>Shit is florida</Props>
    </Story>
  </Stories>
), root);
