import { useReducer, useState } from 'react';
import BreweryContext from './BreweryContext';
import BreweryReducer from './BreweryReducer';

import {
  GET_BREWERIES_LIST,
  CLEAR_BREWERIES_LIST,
  NO_DATA_PROVINCE,
  SET_INPUT,
  SET_LOADING,
} from './types';

const BreweryState = props => {
  const initialState = {
    input: '',
    breweryList: [],
    provinceError: '',
    loading: false,
  };

  const [state, dispatch] = useReducer(BreweryReducer, initialState);
  const [txtInput, setTxtInput] = useState('');

  //Helper Functions

  const clearInput = () => {
    setTxtInput('');
    dispatch({ type: CLEAR_BREWERIES_LIST });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const onInputChange = e => {
    e.preventDefault();
    setTxtInput(e.target.value);
  };

  //Adding API KEY to the url so it's easier to run localy. Usually I would keep it in .env file and have env variable in Heroku dashboard.
  const getBreweries = async input => {
    setLoading();
    const apiUrl = province => {
      return `https://beermapping.com/webservice/locstate/f13f4ee3d949e99473b9c41e8be0a994/${province}&s=json`;
    };

    const fetchData = async input =>
      await fetch(apiUrl(input)).then(res => res.json());

    const provinceData = async (name1, name2) => {
      const data = await Promise.all([fetchData(name1), fetchData(name2)]);
      const filteredData = data
        .flat()
        .filter(item => item.status !== 'Beer Store')
        .filter(item => item.name !== 'No locations Found')
        .filter(item => item.name !== null && item.address !== null);
      filteredData.length > 0
        ? dispatch({
            type: GET_BREWERIES_LIST,
            payload: filteredData,
          })
        : dispatch({
            type: NO_DATA_PROVINCE,
          });
    };

    //* Make switch statement that checks if input is a valid province name

    switch (input.toLowerCase()) {
      case 'alberta': {
        provinceData('alberta', 'ab');
        break;
      }
      case 'ab': {
        provinceData('alberta', 'ab');
        break;
      }
      case 'british columbia': {
        provinceData('british columbia', 'bc');
        break;
      }
      case 'bc': {
        provinceData('british columbia', 'bc');
        break;
      }
      case 'manitoba': {
        provinceData('manitoba', 'mb');
        break;
      }
      case 'mb': {
        provinceData('manitoba', 'mb');
        break;
      }
      case 'new brunswick': {
        provinceData('new brunswick', 'nb');
        break;
      }
      case 'nb': {
        provinceData('new brunswick', 'nb');
        break;
      }
      case 'newfoundland': {
        provinceData('nl', 'newfoundland');
        break;
      }
      case 'nl': {
        provinceData('nl', 'newfoundland');
        break;
      }
      case 'newfoundland and labrador': {
        provinceData('nl', 'newfoundland');
        break;
      }
      case 'nova scotia': {
        provinceData('nova scotia', 'ns');
        break;
      }
      case 'ns': {
        provinceData('nova scotia', 'ns');
        break;
      }
      case 'ontario': {
        provinceData('ontario', 'on');
        break;
      }
      case 'on': {
        provinceData('ontario', 'on');
        break;
      }
      case 'prince edward island': {
        provinceData('prince edward island', 'pe');
        break;
      }
      case 'pei': {
        provinceData('prince edward island', 'pe');
        break;
      }
      case 'pe': {
        provinceData('prince edward island', 'pe');
        break;
      }
      case 'quebec': {
        provinceData('quebec', 'qc');
        break;
      }
      case 'qc': {
        provinceData('quebec', 'qc');
        break;
      }
      case 'saskatchewan': {
        provinceData('saskatchewan', 'sk');
        break;
      }
      case 'sk': {
        provinceData('saskatchewan', 'sk');
        break;
      }
      case 'yukon': {
        provinceData('yukon', 'yt');
        break;
      }
      case 'yukon territory': {
        provinceData('yukon', 'yt');
        break;
      }
      case 'yt': {
        provinceData('yukon', 'yt');
        break;
      }
      case 'northwest territories': {
        provinceData('northwest territories', 'nt');
        break;
      }
      case 'nt': {
        provinceData('northwest territories', 'nt');
        break;
      }
      case 'nunavut': {
        provinceData('nunavut', 'nu');
        break;
      }
      case 'nu': {
        provinceData('nunavut', 'nu');
        break;
      }

      default:
        dispatch({ type: SET_INPUT });
    }
  };

  return (
    <BreweryContext.Provider
      value={{
        input: state.input,
        breweryList: state.breweryList,
        loading: state.loading,
        provinceError: state.provinceError,
        txtInput,
        setTxtInput,
        getBreweries,
        onInputChange,
        clearInput,
        setLoading,
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
