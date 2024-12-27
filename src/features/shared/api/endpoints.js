export const ENDPOINTS = {
    // Properties
    CREATE_PROPERTY: '/api/properties',
    GET_PROPERTIES: '/api/properties',
    GET_PROPERTY: (propertyId) => `/api/properties/${propertyId}`,
    UPDATE_PROPERTY: (propertyId) => `/api/properties/${propertyId}`,
    DELETE_PROPERTY: (propertyId) => `/api/properties/${propertyId}`,
    GET_PROPERTY_DETAILS: (propertyId) => `/api/properties/${propertyId}/details`,
    CREATE_PROPERTY_WHOLE: '/api/properties/whole',

    // Companies
    GET_COMPANIES_BY_TYPE: (companyType) => `/api/companies/by-type/${companyType}`,

    // Rooms
    CREATE_ROOM: '/api/rooms',
    GET_ROOMS: '/api/rooms',
    GET_ROOM: (roomId) => `/api/rooms/${roomId}`,
    UPDATE_ROOM: (roomId) => `/api/rooms/${roomId}`,
    DELETE_ROOM: (roomId) => `/api/rooms/${roomId}`,
    GET_ROOM_DETAILS: (roomId) => `/api/rooms/${roomId}/details`,

    // Products
    CREATE_PRODUCT: '/api/products',
    GET_PRODUCTS: '/api/products',
    GET_PRODUCT: (productId) => `/api/products/${productId}`,
    UPDATE_PRODUCT: (productId) => `/api/products/${productId}`,
    DELETE_PRODUCT: (productId) => `/api/products/${productId}`,
    GET_PRODUCT_DETAILS: (productId) => `/api/products/${productId}/details`,
    
    // Product Specifications
    CREATE_PRODUCT_SPECIFICATION: (productId) => `/api/products/${productId}/specifications`,
    UPDATE_PRODUCT_SPECIFICATIONS: (productId) => `/api/products/${productId}/specifications`,
    GET_PRODUCT_SPECIFICATIONS: (productId) => `/api/products/${productId}/specifications`,
    UPDATE_PRODUCT_SPECIFICATION: (specId) => `/api/specifications/${specId}`,
    DELETE_PRODUCT_SPECIFICATION: (specId) => `/api/specifications/${specId}`,
    GET_PRODUCT_SPECIFICATION: (specId) => `/api/specifications/${specId}`,

    // Product Dimensions
    CREATE_PRODUCT_DIMENSION: (productId) => `/api/products/${productId}/dimensions`,
    UPDATE_PRODUCT_DIMENSIONS: (productId) => `/api/products/${productId}/dimensions`,
    GET_PRODUCT_DIMENSIONS: (productId) => `/api/products/${productId}/dimensions`,
    UPDATE_PRODUCT_DIMENSION: (dimensionId) => `/api/dimensions/${dimensionId}`,
    DELETE_PRODUCT_DIMENSION: (dimensionId) => `/api/dimensions/${dimensionId}`,
    GET_PRODUCT_DIMENSION: (dimensionId) => `/api/dimensions/${dimensionId}`,

    // Images
    GET_PRESIGNED_URL: '/api/images/presigned-url',
    DELETE_IMAGE: (imageId) => `/api/images/${imageId}`,
    GET_IMAGE: (imageId) => `/api/images/${imageId}`,
    COMPLETE_IMAGE_UPLOAD: (imageId) => `/api/images/${imageId}/complete`,
    GET_IMAGES: '/api/images',
    UPDATE_IMAGE_STATUS: (imageId) => `/api/images/${imageId}/status`,

    // Users
    USER: {
        ME: '/api/users/me',
        UPDATE_ME: '/api/users/me',
        GET_SELLER: '/api/users/me/seller',
        UPDATE_SELLER: '/api/users/me/seller',
        CREATE_SELLER: '/api/users/me/seller',
        CREATE: '/api/users'
    }
}; 