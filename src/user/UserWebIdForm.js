
import Form from 'react-jsonschema-form'
import {compose, withHandlers, withProps} from 'recompose'
import withUser from './withUser'

const controller = compose(
  withUser,
  withProps({
    schema: {
      title:      "Connect to your data.",
      type:       "object",
      required:   ["webid"],
      properties: {
        webid: {type: "string", title: "Web-ID", default: "https://public.yodata.me/profile/card#me"}
      }
    }
  }),
  withHandlers({
    onSubmit: ({fetchProfile}) => ({formData: {webid}}) => {
      fetchProfile(webid)
    }
  }),
)

export const UserWebIdForm = controller(Form);
export default UserWebIdForm;
