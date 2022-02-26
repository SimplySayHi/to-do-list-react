
import ToDoList from '../components/ToDos/ToDoList';
import { MockedState } from '../../.storybook/MockedState';

export default {
    title: 'ToDo/ToDoList',
    component: ToDoList
}

const Template = args => (
    <ToDoList {...args} />
)

export const List = Template.bind({})
/* List.decorators = [
    (story) => <MockStore initialState={MockedState}>{story()}</MockStore>,
]; */
List.args = {
    title: 'List Name',
    items: MockedState.list
}
