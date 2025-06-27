'use server';

export async function submitDiscountCode(prev: { discountType: string, discountCode:string }, formData: FormData) {
  const discountType = formData.get('discountType');
  const discountCode = formData.get('discountCode');

  // Preserve the previous state and update only the changed field
  return {
    ...prev,
    discountType: discountType as string,
    discountCode: discountCode as string,
  };
}
