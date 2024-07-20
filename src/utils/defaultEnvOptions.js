export const defaultEnvOptions = () => {
     return {
          AUTHENTICATION_URL: `${import.meta.env?.VITE_API_URL}/api/v1/auth`,
          USERS_URL: `${import.meta.env?.VITE_API_URL}/api/v1/users`,
          PRODUCTS_URL: `${import.meta.env?.VITE_API_URL}/api/v1/products`,
          CART_URL: `${import.meta.env?.VITE_API_URL}/api/v1/carts`,
          PAYMENT_URL: `${import.meta.env?.VITE_API_URL}/api/v1/payments`,
          CATEGORIES_URL: `${import.meta.env?.VITE_API_URL}/api/v1/categories`,
          ROLES_URL: `${import.meta.env?.VITE_API_URL}/api/v1/roles`,
     };
};
