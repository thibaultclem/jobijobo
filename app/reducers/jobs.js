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
      var newState = state.map(job => {
         if (job._id === action.job._id) {
            return action.job
         } else {
            return job;
         }
      });
      return newState;
      case 'DELETE_JOB_OFFER':
      var newState = state.filter(job => job._id !== action.jobId);
      return newState;
      case 'DELETE_NOTE':
      var newState = state.map(job => {
         if (job._id === action.note.job) {
            return Object.assign({}, job, {
               notes: job.notes.filter(note => note._id !== action.note._id)
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
