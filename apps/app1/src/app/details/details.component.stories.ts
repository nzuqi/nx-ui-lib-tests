import type { Meta, StoryObj } from '@storybook/angular';
import { DetailsComponent } from './details.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DetailsComponent> = {
  component: DetailsComponent,
  title: 'DetailsComponent',
};
export default meta;
type Story = StoryObj<DetailsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/details works!/gi)).toBeTruthy();
  },
};
