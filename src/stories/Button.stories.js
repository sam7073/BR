import React from "react";
import { Button } from "../components/Button";

const div_story = {
  title: "Button",
  argTypes: {
    primary: { control: "boolean" },
    secondary: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args}>Hoon</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const MarginPadding = Template.bind({});
MarginPadding.args = {
  primary: true,
  marginTop: "30px",
  marginBottom: "10px",
  marginLeft: "10px",
  marginRight: "10px",
};

export const long = Template.bind({});
long.args = {
  primary: true,
  long: true,
};

export const thick = Template.bind({});
thick.args = {
  primary: true,
  thick: true,
};

export const longthick = Template.bind({});
longthick.args = {
  primary: true,
  long: true,
  thick: true,
};

export default div_story;
