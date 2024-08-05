export function formatMoney(value) {
    if (isNaN(value)) {
        return "Invalid number";
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(value);
}
