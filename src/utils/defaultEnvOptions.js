export const defaultEnvOptions = () => {
     return {
          AUTHENTICATION_URL: `${import.meta.env?.VITE_API_URL}/auth`,
          PRODUCTS_URL: `${import.meta.env?.VITE_API_URL}/products`,
          CART_URL: `${import.meta.env?.VITE_API_URL}/carts`,
          PAYMENT_URL: `${import.meta.env?.VITE_API_URL}/payments`,
     };
};
