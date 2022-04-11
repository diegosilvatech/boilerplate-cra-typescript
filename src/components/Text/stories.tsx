import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from './Text';

export default {
  title: 'Molecules/Text',
  component: Text,
  args: {
    children: 'Text example',
    type: 'p',
    size: 'default',
    weight: 'medium',
    color: 'black',
    opacity: 'full',
    isUpperCase: false
  },
  argTypes: {
    children: {
      table: {
        category: 'custom inputs'
      }
    },
    name: {
      table: {
        category: 'custom modifiers'
      }
    },
    color: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'inline-radio'
      }
    },
    type: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'select'
      }
    },
    size: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'select'
      }
    },
    opacity: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'select'
      }
    },
    weight: {
      table: {
        category: 'custom modifiers'
      },
      control: {
        type: 'select'
      }
    },
    isUpperCase: {
      table: {
        category: 'custom modifiers'
      }
    }
  }
} as Meta;

export const TextDefault: Story<TextProps> = (args) => {
  return (
    <>
      <Text {...args} type="h1" size="display" />
      <Text {...args} type="h2" size="heading" />
      <Text {...args} type="h3" size="extraExtraLarge" />
      <Text {...args} type="h4" size="extraLarge" />
      <Text {...args} type="h5" size="large" />
      <Text {...args} type="p" size="default" />
      <Text {...args} type="p" size="small" />
      <Text {...args} type="span" size="extraSmall" />
    </>
  );
};
