// @flow
import values from "lodash/values";

const SCHEMA_INITIAL_STATE = {
  config: {
    root: "/public/schema"
  },
  hasData: false
};

const schemaReducer = (state: any = SCHEMA_INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case "SCHEMA/FETCH_SCHEMA_SUCCESS":
      if (!action.payload) {
        return state;
      }
      let index = action.payload.result.data;
      let items = values(index);
      let types = items.filter(prop => prop.type === "Type");
      let properties = items.filter(prop => prop.type === "Property");
      let actions = types.filter(type => type.label.endsWith("Action"));
      return {
        ...state,
        hasData: true,
        ...{ index, actions, items, types, properties }
      };
    case "SCHEMA/UPDATE_SCHEMA_COMPLETED":
      let data = action.payload;
      let { id } = data;
      let current = state.index[id];
      let next = { ...current, ...data };
      return {
        ...state,
        index: { ...state.index, [id]: next }
      };
    case "DB/SET_COMPLETED":
      if (action.payload.id && action.payload.id.startsWith("/schema/")) {
        let segments = action.payload.id
          .replace("/schema", "schema/index")
          .split("/");
        if (segments.length === 4) {
          let subjectId = segments[2];
          let subject = state.index[subjectId];
          let predicate = segments[3];
          return {
            ...state,
            index: {
              ...state.index,
              [subjectId]: {
                ...subject,
                [predicate]: action.payload.nextValue
              }
            }
          };
        } else console.error("unexpected path length", segments);
      }
      return state;
    default:
      return state;
  }
};

export default schemaReducer;

//{
//  type: 'DB/SET_COMPLETED',
//    payload: {
//  type: 'DB/SET',
//    payload: {
//    id: '/schema/AboutPage/description',
//      value: 'Web page type: About page.',
//      nextValue: 'Web page type: About page.'
//  }
//}
//}
