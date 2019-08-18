import { MODIFY_ENTRY, DELETE_ENTRY } from "./actionTypes";

export const modifyEntry = (entryId, subject, entry) => ({
  type: MODIFY_ENTRY,
  payload: {
    id: entryId,
    subject: subject,
    entry: entry
  }
});

export const deleteEntry = (entryId) => ({
  type: DELETE_ENTRY,
  payload: {
    id: entryId
  }
})