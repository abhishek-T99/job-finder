export const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NP", {
        style: "currency",
        currency: "NPR",
    }).format(amount);
};
