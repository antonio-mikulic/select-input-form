"use client";
import {
  PButton,
  PDivider,
  PHeading,
  PLinkPure,
  PSelect,
  PSelectOption,
  PText,
  PTextFieldWrapper,
} from "@porsche-design-system/components-react";
import { useActionState, useState } from "react";
import { submitDiscountCode } from "./submitDiscountCode";

export function DiscountCodeForm() {
  const [state, action] = useActionState(submitDiscountCode, {
    discountType: "",
    discountCode: "",
    discountType2: "",
  });

  const [formState, setFormState] = useState({
    discountType: "",
    discountCode: "",
    discountType2: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newFormValues = {
      discountType: formData.get("discountType") as string,
      discountCode: formData.get("discountCode") as string,
      discountType2: formData.get("discountType2") as string,
    };

    setFormState(newFormValues);
  };

  return (
    <section
      style={{
        padding: "32px",
      }}
    >
      <PHeading size="large">
        useActionState form
        <PLinkPure href="https://github.com/porsche-customer/slppecomm-ecomm-health-dashboard-fe/blob/main/src/features/discountCodes/modify/submitDiscountCode.ts">
          Realword usecase on Github
        </PLinkPure>
      </PHeading>

      <form action={action}>
        <label htmlFor="discountType2">
          Discount type 2 (does not lose state):
        </label>
        <br />
        <select
          style={{
            width: "100%",
            maxWidth: "300px",
          }}
          name="discountType2"
          key={`discountType2-${state.discountType2}`}
          defaultValue={state.discountType2}
        >
          <option value="">Please select value</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        <PTextFieldWrapper label="Code" description="Does not lose state">
          <input
            type="text"
            name="discountCode"
            defaultValue={state.discountCode}
          />
        </PTextFieldWrapper>

        <PSelect
          label="Discount type"
          name="discountType"
          description="Loses state after clicking submit 2+ times"
          key={`discountType-${state.discountType}`}
          value={state.discountType}
        >
          <PSelectOption value="A">A</PSelectOption>
          <PSelectOption value="B">B</PSelectOption>
        </PSelect>

        <PButton type="submit">Save</PButton>
        <PText>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </PText>
      </form>

      <PDivider
        style={{
          width: "100%",
          margin: "20px 0",
        }}
      ></PDivider>

      <PHeading size="large">form with manual state tracking</PHeading>
      <form onSubmit={handleSubmit}>
        <PTextFieldWrapper label="Code" description="Does not lose state">
          <input
            type="text"
            name="discountCode"
            defaultValue={formState.discountCode}
          />
        </PTextFieldWrapper>

        <PSelect
          label="Discount type"
          name="discountType"
          description="Does not lose state"
          value={formState.discountType}
        >
          <PSelectOption value="A">A</PSelectOption>
          <PSelectOption value="B">B</PSelectOption>
        </PSelect>

        <PButton type="submit">Save</PButton>
        <PText>
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </PText>
      </form>
    </section>
  );
}
