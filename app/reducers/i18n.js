const initialState = {
   language: null,
   labels: {}
};

export default function i18n(state = initialState, action) {
   switch (action.type) {
      case 'FETCH_LANGUAGE':
         return {
            language: action.lang,
            labels: action.labels
         };
      default:
         return state;
   }
};
