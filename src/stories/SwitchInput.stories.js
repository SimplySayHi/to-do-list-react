
import '../components/ToDos/ToDoNew.scss';
import SwitchInput from '../components/UI/SwitchInput'

export default {
    title: 'UI/SwitchInput',
    component: SwitchInput,
    decorators: [(Story) => <form className="todo-new__form">{Story()}</form>]
}

const Template = args => <SwitchInput {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Hello world',
    checked: false,
    onChange: () => {}
}
