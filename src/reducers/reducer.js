const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_DIGIT':
        if (state.curr === null) {
          if (action.value === '.') {
            return { ...state, curr: '0.' };
          } else {
            return { ...state, curr: String(action.value) };
          }
        } else if (action.value === '.' && state.curr.includes('.')) {
          return state; // Do nothing if a period is already present
        } else {
          return { ...state, curr: state.curr + String(action.value) };
        }
      case 'CLEAR':
        return { ...state, curr: null, prev: null };
      case 'DELETE':
        return {
          ...state,
          curr: state.curr ? (state.curr.length > 1 ? state.curr.slice(0, -1) : null) : null
        };
        case 'OPERATOR':
            if (state.operator !== undefined) {
              dispatch({ type: 'EQUALS' });
            }
            if (state.curr === null) {
              if (state.prev === null) {
                return state; // Do nothing if there's no current input or previous input
              }
              return {
                ...state,
                operator: action.value,
              };
            } else {
              return {
                ...state,
                prev: state.curr,
                curr: null,
                operator: action.value,
              };
            }
          
      case 'EQUALS':
        if (state.curr === null || state.prev === null || state.operator === undefined) {
          return state; // Do nothing if necessary data is missing
        } else {
          const prevNum = parseFloat(state.prev);
          const currNum = parseFloat(state.curr);
          let result;
          switch (state.operator) {
            case '+':
              result = prevNum + currNum;
              break;
            case '-':
              result = prevNum - currNum;
              break;
            case '*':
              result = prevNum * currNum;
              break;
            case '/':
              result = prevNum / currNum;
              break;
            default:
              result = null;
          }
          return {
            ...state,
            curr: null,
            prev: result !== null ? result.toString() : null,
            operator: undefined
          };
        }
      default:
        return state;
    }
  };
export default reducer;