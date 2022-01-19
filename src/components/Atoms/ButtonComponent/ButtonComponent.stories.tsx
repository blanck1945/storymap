import React from "react";
import { ButtonVariants } from "../../../models/Enums/ButtonEnums";
import ButtonComponent, { ButtonComponentProps } from "./ButtonComponent";
import { Story } from "@storybook/react";

const button = {
  title: "Atom/Button",
  component: ButtonComponent,
};

export default button;

export const Primary = () => (
  <ButtonComponent variant={ButtonVariants.primary}>Primary</ButtonComponent>
);

export const Secondary = () => (
  <ButtonComponent variant={ButtonVariants.secondary}>
    Secondary
  </ButtonComponent>
);

export const Success = () => (
  <ButtonComponent variant={ButtonVariants.success}>Succes</ButtonComponent>
);

export const Danger = () => (
  <ButtonComponent variant={ButtonVariants.danger}>Danger</ButtonComponent>
);

const Template: Story<ButtonComponentProps> = (args) => (
  <ButtonComponent {...args} />
);

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: ButtonVariants.primary,
  children: "Press",
};
