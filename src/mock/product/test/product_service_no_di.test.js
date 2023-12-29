const ProductService = require('../product_service_no_di.js');
const productClient = require('../product_client.js');
jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    {item: "Milk", available: true},
    {item: "Banana", available: false}
  ]);
  productClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems
    }
  })
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available', async ()=> {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{item: "Milk", available: true}]);
  });

  it('test', async ()=> {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });


})