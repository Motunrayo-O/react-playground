import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
  todosBeforeUpdate: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addNewTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onMutate: (todoToCreate: Todo) => {
      const todosBeforeUpdate =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      // optimistic update
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        todoToCreate,
        ...(todos || []),
      ]);

      onAdd();

      return { todosBeforeUpdate };
    },
    onSuccess: (createdTodo, todoToCreate) => {
      console.log(createdTodo);

      // Invalidate the cache to trigger a refresh
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS,
      // });

      //JSON Placeholder does not actually add the item so update cache manually
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((t) => (t === todoToCreate ? createdTodo : t))
      );
    },
    onError: (error: Error, todoToCreate, context) => {
      if (!context) return;

      // restore the data to state before update attempt
      queryClient.setQueryData(CACHE_KEY_TODOS, context.todosBeforeUpdate);
    },
  });

  return addNewTodo;
};

export default useAddTodos;
