//formatCurrency function
export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-Gh", {
        style: "currency",
        currency: "GHS",
    }).format(amount);
}