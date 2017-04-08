import React from 'react'
import {connect} from 'react-redux'
import {compose, withState} from 'recompose'
import {CodeEditor, Section, SectionTitle} from '../component'
import {saveReaction} from './streamActions'

//const Editor = properties => (
//  <table className="table">
//    <tbody>
//    {properties && properties.map(property =>
//      <tr key={property.id}>
//        <td>{lit(property.label)}</td>
//        <td>{lit(property.range)}</td>
//        <td><input type="text" className="form-control"/></td>
//        <td><Icon name="close" onClick={() => hideProperty(property)}/></td>
//      </tr>
//    )}
//    </tbody>
//  </table>
//)


const ActionExample = ({stream, action, dispatch, handlerValue, inputValue, setHandler, setInput}) => {
  return (
    <div>
      <Section>
        <SectionTitle>EXAMPLE VALUE: {action.label}</SectionTitle>
        <CodeEditor value={inputValue} onChange={v => setInput(v)}/>

        <SectionTitle className="mt-2">REACTION</SectionTitle>
        <CodeEditor value={handlerValue} onChange={v => setHandler(v)}/>
      </Section>

      <div className="card-block d-flex justify-content-between">
        <span className="btn btn-outline-success">POST</span>
        <input className="form-control mx-1" type="text"/>
        <button id="save_handler" className="btn btn-primary"
                onClick={() => dispatch(saveReaction({url: stream.url, data: handlerValue}))}>SAVE
        </button>
        <button id="send_action" className="btn btn-success">SEND</button>
      </div>

    </div>
  )
}

const enhanced = compose(
  withState('handlerValue', 'setHandler', 'hander'),
  withState('inputValue', 'setInput', 'input'),
  connect()
)


export default enhanced(ActionExample)