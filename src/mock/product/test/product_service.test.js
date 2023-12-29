const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');
jest.mock('../product_client');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  })

  it('should filter out only available', async ()=> {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{item: "Milk", available: true}]);
  });
})