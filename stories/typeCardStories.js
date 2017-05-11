import React from 'react'
import {action, linkTo, storiesOf} from '@kadira/storybook'
import {TypeCard} from '../src/component/TypeCard.jsx'

export default storiesOf('TypeCard', module).add('defaults', () => {
  return
  <div>
    <TypeCard
      header="header"
      meta="meta"
    />
  </div>

});
