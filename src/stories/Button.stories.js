
import Button from '../components/UI/Button'

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        // SUPPOSE YOU HAVE AN EVENT HANDLER WITH ARG NAME handleClick.
        // action: 'handleClick IS ARBITRARY AND WILL BE LOGGED IN CONSOLE
        // handleClick: { action: 'handleClick' }
    }
}

// export const Blue = () => <Button type="button" className="btn-light-blue">Button</Button>

// const Template = args => <Button {...args}>Button</Button>

const Template = args => <Button {...args} />

export const Blue = Template.bind({})
Blue.args = {
    type: 'button',
    className: 'btn-light-blue',
    children: 'Button'
}

export const Green = Template.bind({})
Green.args = {
    type: 'button',
    className: 'btn-green',
    children: 'Button'
}
