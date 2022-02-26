
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const MockStore = ({ initialState, children }) => (
    <Provider
        store={configureStore({
            reducer: {
                todos: createSlice({
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
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
);
