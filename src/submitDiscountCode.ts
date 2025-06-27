"use server";

export async function submitDiscountCode(
  prev: { discountType: string; discountCode: string; discountType2: string },
  formData: FormData
) {
  const discountType = formData.get("discountType");
  const discountCode = formData.get("discountCode");
  const discountType2 = formData.get("discountType2");

  // Preserve the previous state and update only the changed field
  return {
    ...prev,
    discountType: discountType as string,
    discountType2: discountType2 as string,
    discountCode: discountCode as string,
  };
}
