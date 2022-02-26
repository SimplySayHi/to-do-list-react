
import * as ToDoItemStories from '../src/stories/ToDoItem.stories';

const getTodoItemsFromStories = () => {
    return Object.keys(ToDoItemStories).filter(keyName => keyName !== 'default').map(keyName => ToDoItemStories[keyName].args.item)
}

export const MockedState = {
    list: getTodoItemsFromStories()
};
