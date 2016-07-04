var update = require('react/lib/update');

export default function jobs(state = {}, action) {
   switch (action.type) {
      case 'FETCH_JOB_OFFER':
      return action.jobs;
      case 'ADD_JOB_OFFER':
      return [
         ...state,
         action.job
      ];
      case 'UPDATE_JOB_OFFER':
      return [
         ...state,
         action.job
      ];
      case 'DELETE_JOB_OFFER':
      var newState = state.filter(job => job._id !== action.jobId);
      return newState;
      case 'ADD_NOTE_TO_JOB_OFFER':
      var newState = state.map(job => {
         if (job._id === action.note.job._id) {
            return Object.assign({}, job, {
               notes: [...job.notes, action.note]
            })
         } else {
            return job;
         }
      });
      return newState;
      default:
      return state;
   }
}
