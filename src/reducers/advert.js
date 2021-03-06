const initialState = {
  allAdverts: [],
  updatedData: [],
  advertsCount: 0,
  dropdown: [],
  searchedData: [],
  location: '',
  label: '',
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case 'PASS_PAGE_NUM': {
      return {
        ...state,
      };
    }

    case 'BOOKID_ADVERT': {
      return {
        ...state,
        bookIdAdvert: action,
      };
    }
    case 'FETCH_ALL_ADVERTS': {
      let tempArryMaster = [];

      action.adverts.data.map((item) => {
        for (let x in item) {
          let tempArry = [];
          item[x].map((value) => {
            tempArry.push(value);
          });
          tempArryMaster.push(...tempArry);
        }
      });

      return {
        ...state,
        allAdverts: tempArryMaster,
        dropdown: action.adverts.dropdown,
      };
    }

    case 'SEARCH_PROPERTIES': {
      let searchArry = [];
      let searchlabel = '';
      action.searchData.data.map((item) => {
        for (let x in item) {
          let srchtempArry = [];
          searchlabel = x;
          item[x].map((value) => {
            srchtempArry.push(value);
          });
          searchArry.push(...srchtempArry);
        }
      });

      return {
        ...state,
        searchedData: searchArry,
        location: action.location,
        label: searchlabel,
      };
    }
    case 'UPDATE_SITE': {
      return {
        ...state,
        updatedData: action.updatedData,
      };
    }

    case 'ADD_NEW_PROPERTY': {
      return {
        ...state,
        newdata: action.newdata,
      };
    }
    case 'FETCH_ONE_ADVERT': {
      return {
        ...state,
        selectedAdvert: action.advert.data,
      };
    }
    case 'DELETE_ADVERT': {
      return {
        ...state,
        deletedAdvert: action.advert.data,
      };
    }
    case 'BROKER_ACTION': {
      return {
        ...state,
        brokerEvent: action.brokerAction.data,
      };
    }

    default: {
      return state;
    }
  }
}
