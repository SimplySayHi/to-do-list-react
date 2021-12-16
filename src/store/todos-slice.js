
import { createSlice } from '@reduxjs/toolkit';
import list from '../data/ToDoList';

const initialState = {
    list
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo(state, action){
            state.list.push(action.payload);
        },
        deleteToDo(state, action){
            const todo = state.list.find(item => item.id === action.payload);
            state.list.splice(state.list.indexOf(todo), 1);
        },
        setCompleteness(state, action){
            const todoId = action.payload.todoId;
            state.list.find(item => item.id === todoId).isCompleted = action.payload.isCompleted;
        }
    }
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
