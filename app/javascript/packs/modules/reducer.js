import ACTIONS from './action';

const defaultState = {
  stateAttribute: []
};

const sampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ACTION_1: {
      // let item = action.payload;
      let newState = { ...state };

      return newState;
    }

    case ACTIONS.Types.ACTION_2: {
      let newState = { ...state };

      return newState;
    }

    default:
      return state;
  }
};

export default sampleReducer;
