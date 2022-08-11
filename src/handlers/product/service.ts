import { ProductProxy } from "./proxy";

export class ProductService {
  async getAllProducts() {

    const productProxy = new ProductProxy();

    let shopperProducts = await productProxy.getAllProducts() ;

    const productDtoList  = shopperProducts.data.map((product) => {
      const productDto = {
        id: product.id,
        name: product.attributes.name,
      };

      return productDto;
    });


    return productDtoList;
  }
}
