import { MODIFY_ENTRY } from "./actionTypes";


// function modifyEntry(entryId, subject, entry) {
//   return {
//     type: MODIFY_ENTRY,
//     id: entryId,
//     subject: subject,
//     entry: entry,
//   };
// }

// export {
//   modifyEntry,
// };

export const modifyEntry = (entryId, subject, entry) => ({
  type: MODIFY_ENTRY,
  payload: {
    id: entryId,
    subject: subject,
    entry: entry
  }
});