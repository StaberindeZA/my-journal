const initialState = {
  id: '',
  subject: '',
  entry: '',
}

function entrySingle(state = initialState, action) {
  if(action.type === 'MODIFY_ENTRY') {
    let localId;
    if(!action.payload.id) {
      // Generate a new UUID
      // Hardcoded for now.
      localId = '876';
    }
    // state.id = action.payload.id ? action.payload.id : localId;
    // state.subject = action.payload.subject;
    // state.entry = action.payload.entry;

    return {
      id: action.payload.id ? action.payload.id : localId,
      subject: action.payload.subject,
      entry: action.payload.entry,
    };
  } else {
    return state;
  }
}

export default entrySingle;