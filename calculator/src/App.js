/* eslint-disable default-case */
import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./style.css"


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}


function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit ==="0" && state.currentOpperand === "0") return state
      if (payload.digit === "." && state.currentOperand == null) { 
        return { ...state, 
          currentOpperand: payload.digit,
        }; 
      } 
      if (payload.digit === "." && state.currentOperand.includes(".")) { 
        return { ...state, 
          currentOpperand: payload.digit,  
        };
      } 
      // '.' isn't adding on to current state. clears state and displays the '.'
    return {
      ...state,
      currentOpperand: `${state.currentOpperand || ""}${payload.digit}`
    }
  case ACTIONS.CLEAR:
      return {};
  }
}


function App() {

  const [{currentOpperand, previousOpperand, operation}, dispatch] = useReducer(reducer, {})


  return (
    <div className="calculator-grid">
      
      <div className="output">
        <div className="previous-opperand">{previousOpperand} {operation}</div>
        <div className="current-opperand">{currentOpperand}</div>
      </div>

      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
        AC
        </button>
      <button >
        DEL
        </button>
      <OperationButton operation="\" dispatch={dispatch}/>     
      <DigitButton digit="1" dispatch={dispatch}/>     
      <DigitButton digit="2" dispatch={dispatch}/>     
      <DigitButton digit="3" dispatch={dispatch}/>     
      <OperationButton operation="*" dispatch={dispatch}/>     
      <DigitButton digit="4" dispatch={dispatch}/>     
      <DigitButton digit="5" dispatch={dispatch}/>     
      <DigitButton digit="6" dispatch={dispatch}/>     
      <OperationButton operation="+" dispatch={dispatch}/>     
      <DigitButton digit="7" dispatch={dispatch}/>     
      <DigitButton digit="8" dispatch={dispatch}/>     
      <DigitButton digit="9" dispatch={dispatch}/>     
      <OperationButton operation="-" dispatch={dispatch}/>     
      <DigitButton digit="." dispatch={dispatch}/>     
      <DigitButton digit="0" dispatch={dispatch}/>     
      <button className="span-two">
        =
        </button>
    </div>
  )
}
export default App
