const initialState = {
  allAdverts: [],
  updatedData: [],
  advertsCount: 0,
  pageCount: 1,
};

export default function eventReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case 'PASS_PAGE_NUM': {
      return {
        ...state,
      };
    }
    case 'CREATE_NEW_ADVERT': {
      return {
        ...state,
        lastAddedAdvert: action.advert,
        allAdverts: [...state.allAdverts, action.advert],
        advertsCount: state.advertsCount + 1,
      };
    }
    case 'BOOKID_ADVERT': {
      console.log(action);
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
      console.log(action.advert.data);
      return {
        ...state,
        deletedAdvert: action.advert.data,
      };
    }

    default: {
      return state;
    }
  }
}
