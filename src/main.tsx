import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";
import { DiscountCodeForm } from "./DiscountCodeForm.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PorscheDesignSystemProvider theme={"light"}>
      <DiscountCodeForm />
    </PorscheDesignSystemProvider>
  </StrictMode>
);
