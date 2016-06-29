export default function jobs(state = {}, action) {
   switch (action.type) {
      case 'FETCH_JOB_OFFER':
         return action.jobs;
      case 'ADD_JOB_OFFER':
         return [
            ...state,
            action.job
         ];
      default:
      return state;
   }
}
