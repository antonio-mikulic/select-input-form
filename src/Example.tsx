import {
  PSelect,
  PSelectOption,
} from '@porsche-design-system/components-react';

export const Example = () => {
  return (
    <form action="">
      <PSelect
        name="options"
        label="Some Label"
        description="Some description"
        value="b"
      >
        <PSelectOption value="a">Option A</PSelectOption>
        <PSelectOption value="b">Option B</PSelectOption>
        <PSelectOption value="c">Option C</PSelectOption>
        <PSelectOption value="d">Option D</PSelectOption>
        <PSelectOption value="e">Option E</PSelectOption>
        <PSelectOption value="f">Option F</PSelectOption>
      </PSelect>
    </form>
  );
};
