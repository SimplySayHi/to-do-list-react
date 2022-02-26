
import ToDoItem from '../components/ToDos/ToDoItem';

export default {
    title: 'ToDo/ToDoItem',
    component: ToDoItem
}

const Template = args => <ToDoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: {
        isCompleted: false,
        id: '1a',
        hasPriority: false,
        text: 'Hello World 1a'
    },
};

export const DefaultWithPiority = Template.bind({});
DefaultWithPiority.args = {
    item: {
        isCompleted: false,
        id: '1b',
        hasPriority: true,
        text: 'Hello World 1b'
    },
};

export const Completed = Template.bind({});
Completed.args = {
    item: {
        isCompleted: true,
        id: '2a',
        hasPriority: false,
        text: 'Hello World 2a'
    },
};

export const CompletedWithPiority = Template.bind({});
CompletedWithPiority.args = {
    item: {
        isCompleted: true,
        id: '2b',
        hasPriority: true,
        text: 'Hello World 2b'
    },
};
