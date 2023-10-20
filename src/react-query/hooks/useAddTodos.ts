import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  todosBeforeUpdate: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addNewTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
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
