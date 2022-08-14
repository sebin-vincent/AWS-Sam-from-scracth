import { generateLambdaEvent } from "./utils";
import { lambdaHandler } from "../src/handlers/product/app";
import { plainToClass } from "class-transformer";
import { ProductDto } from "../src/handlers/product/dto/get-product.dto";

describe("Product (e2e tests)", () => {
  it('should return list of products when called to "/products" with HTTPMethod GET', async () => {
    const event = generateLambdaEvent("/products", "GET", null);

    const response = await lambdaHandler(event);

    let productListList: ProductDto[] = JSON.parse(
      response.body
    ) as ProductDto[];

    expect(response.statusCode).toBe(200);
    expect(productListList).toBeDefined();
    expect(productListList.length).toBeGreaterThan(0);
  });

  it('should return statuscode 400 when called to "/products" with HTTPMethod POST', async () => {
    const event = generateLambdaEvent("/products", "POST", null);

    const response = await lambdaHandler(event);

    expect(response.statusCode).toBe(400);
  });
});
