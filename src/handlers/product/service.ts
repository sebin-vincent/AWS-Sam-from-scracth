import { ProductDto } from "./dto/get-product.dto";
import { ProductProxy } from "./proxy";

export class ProductService {
  async getAllProducts() {
    const productProxy = new ProductProxy();

    let shopperProducts = await productProxy.getAllProducts();

    const productDtoList = shopperProducts.data.map((product) => {
      const productDto = new ProductDto();
      productDto.id = product.id;
      productDto.name = product.attributes.name;

      return productDto;
    });

    return productDtoList;
  }
}
