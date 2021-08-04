import {
  CLEAR_BREWERIES_LIST,
  GET_BREWERIES_LIST,
  NO_DATA_PROVINCE,
  SET_INPUT,
  SET_LOADING,
} from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case CLEAR_BREWERIES_LIST:
      return {
        ...state,
        breweryList: [],
        input: false,
        loading: false,
        provinceError: '',
      };
    case GET_BREWERIES_LIST:
      return {
        ...state,
        breweryList: action.payload,
        input: false,
        loading: false,
        provinceError: '',
      };

    case NO_DATA_PROVINCE:
      return {
        ...state,
        breweryList: [],
        loading: false,
        provinceError: 'Sorry, not enough data for this province',
      };
    case SET_INPUT:
      return {
        ...state,
        input: true,
        breweryList: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return { ...state };
  }
};
