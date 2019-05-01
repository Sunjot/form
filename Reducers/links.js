
const links = (state = 0, action) => {

  switch(action.type) {

    case 'TOGGLE_FORM': // if links id does not match, assign that id
      if (action.id !== state) return action.id
      return state;

    default:
      return state;
  }
}

export default links;
