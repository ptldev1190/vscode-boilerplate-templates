import { ComponentMeta, ComponentStory } from '@storybook/react';

import { {__pascalCaseName__} } from './{__pascalCaseName__}';

export default {
	title: 'Components/{__pascalCaseName__}',
	component: {__pascalCaseName__}
} as ComponentMeta<typeof {__pascalCaseName__}>;

const Template: ComponentStory<typeof {__pascalCaseName__}> = (args) => <{__pascalCaseName__} {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary',
};
