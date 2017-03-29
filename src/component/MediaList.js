import {compose, mapProps} from 'recompose'
import {ItemGroup} from 'semantic-ui-react'
import {lit} from '../lib/rdf-utilities'

const enhance = compose(
  mapProps(({items, onClick}) => ({
      items:     items.map(item => ({
        header:      lit(item.label),
        description: lit(item.description),
        key:         item.id,
        onClick:     event => {
          event.preventDefault();
          onClick(item)
        }
      })),
      divided:   true,
      relaxed:   true,
      link:      true
    })
  )
)

export default enhance(ItemGroup)

