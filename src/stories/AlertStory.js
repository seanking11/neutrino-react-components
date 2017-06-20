import React from 'react';
import { storiesOf, addDecorator, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { WithNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, number, select, object, array } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'
import Alert from '../components/Alert'

setAddon(JSXAddon)

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default Alert', () => {
    const options = [
      Alert.types.DANGER,
      Alert.types.SUCCESS,
      Alert.types.INFO,
      Alert.types.WARNING
    ]

    const styles = {
      'padding': '1em 1.5em'
    }

    return (
      <WithNotes notes={'When copying from the JSX tab, note that the \'type\' doesn\'t properly get populated from Alert.types'}>
        <Alert
          show={boolean('Show?', true)}
          title={text('Title', 'Dabnabit!')}
          type={select('Type', options, Alert.types.DANGER)}
          onClose={() => console.log('Nope.')}
          styles={object('Styles', styles)}
          largeAlert={boolean('Large?', false)}
        >
          {text('Message', 'Shit is florida')}
        </Alert>
      </WithNotes>
    )
  })
