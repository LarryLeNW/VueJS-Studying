import ENV_DEV from "../constant/env";

export const getUserOrders = async () => {
    const result = await fetch(
        `${ENV_DEV.TEST.PROXY_URI}${ENV_DEV.TEST.DROP_SHIP_API}/orders/v1?sandbox=true&api_key=${ENV_DEV.TEST.DROP_SHIP_TOKEN_USER}`,
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
    return result;
};
