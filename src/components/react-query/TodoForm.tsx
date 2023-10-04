import { useRef } from "react";
import { Todo } from "../../hooks/useTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface AddTodoContext {
  todosBeforeUpdate: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addNewTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onMutate: (todoToCreate: Todo) => {
      const todosBeforeUpdate =
        queryClient.getQueryData<Todo[]>(["todos"]) || [];

      // optimistic update
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        todoToCreate,
        ...(todos || []),
      ]);

      // clear the input field
      if (ref.current) ref.current.value = "";

      return { todosBeforeUpdate };
    },
    onSuccess: (createdTodo, todoToCreate) => {
      console.log(createdTodo);

      // Invalidate the cache to trigger a refresh
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // });

      //JSON Placeholder does not actually add the item so update cache manually
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((t) => (t === todoToCreate ? createdTodo : t))
      );
    },
    onError: (error: Error, todoToCreate, context) => {
      if (!context) return;

      // restore the data to state before update attempt
      queryClient.setQueryData(["todos"], context.todosBeforeUpdate);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addNewTodo.error && (
        <div className="alert alert-danger">{addNewTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addNewTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addNewTodo.isLoading}>
            {addNewTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
