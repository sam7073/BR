import React from "react";
import { Button } from "../components/Button";

const div_story = {
  title: "Button",
  argTypes: {
    primary: { control: "boolean" },
    bg: { control: "color" },
  },
};

const Template = (args) => <Button {...args}>Hoon</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  bg: "#FFFFFF",
};

export default div_story;
