import { getListProduct } from './productApi'; // Assuming you have an API function

export const fetchProducts = () => async dispatch => {
  try {
    const response = await getListProduct();
    if (response && response.errCode === 0) {
      dispatch(updateProducts(response.products));
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const updateProducts = products => ({
  type: 'UPDATE_PRODUCTS',
  payload: products
});
