let ENV = {
    DEV: {
        DROP_SHIP_API: "",
        PROXY_URI: "",
    },
    PRODUCTION: {
        DROP_SHIP_API: "",
        PROXY_URI: "",
    },
    TEST: {
        DROP_SHIP_API:
            "https://dash.burgerprints.com/pspfulfill/api/v1/dropship-api",
        JSON_SERVER_API: "https://66ac4207f009b9d5c731741d.mockapi.io/api/v1",
        DROP_SHIP_TOKEN_USER: "1f41f5a1-6620-4164-83cd-47603c862b05",
        PROXY_URI: "https://cors-anywhere.herokuapp.com/",
    },
};

export default ENV;
