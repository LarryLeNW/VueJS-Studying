let url = "https://dash.burgerprints.com/pspfulfill/api/v1/dropship-api";
const tokenUser = "1f41f5a1-6620-4164-83cd-47603c862b05";
const urlProxy = "https://cors-anywhere.herokuapp.com/";

export const getUserOrders = async () => {
    const result = await fetch(
        `${urlProxy}${url}/orders/v1?sandbox=true&api_key=${tokenUser}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
            },
        }
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));
    console.log("🚀 ~ getUserOrders ~ result:", result);
    return result;
};
