interface CounterReducerAction {
  type: "reset" | "increment";
}

const counterReducer = (
  state: number,
  action: CounterReducerAction
): number => {
  if (action.type == "reset") return 0;
  if (action.type == "increment") return state + 1;

  return state;
};

export default counterReducer;
