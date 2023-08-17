export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
};
