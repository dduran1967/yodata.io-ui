import React from 'react'
import {connect} from 'react-redux'
import {PageHeader, Section, SectionTitle, ListGroup, ListGroupItemAction} from '../component'
import actions from './streamActions'
import {withProps, compose} from 'recompose'
import ActionExample from './ActionExample'
import {actions as routerActions} from 'redux-router5'


const StreamView = ({stream, selectedAction, selectStreamAction, navigateTo}) => {

  return (
    <div>
      <PageHeader title={stream.name}/>
      <div className="px-3">
        <Section>
          <SectionTitle>ACCEPTS ACTIONS</SectionTitle>
          <ListGroup>
            {stream.action.map(action =>
              <ListGroupItemAction key={action.id} onClick={()=>selectStreamAction(action)}>
                {action.name}
              </ListGroupItemAction>
            )}
          </ListGroup>
        </Section>

        {selectedAction &&
        <Section>
          <SectionTitle>{selectedAction.name}</SectionTitle>
          <ActionExample stream={stream} action={selectedAction}/>
        </Section>
        }


      </div>
    </div>
  )
}


const connected = compose(
  withProps({
    isLoaded: false
  }),
  connect(
    (state, props) => ({
      stream:         state.stream.json[props.route.params.name],
      selectedAction: state.stream.selectedAction,
      ...props
    }),
    {
      selectStreamAction: actions.selectStreamAction,
      navigateTo:         routerActions.navigateTo
    }
  ),
)

export default connected(StreamView);
