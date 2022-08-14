import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ProductService } from "./service";
import { ErrorResponse, ResponseDto } from "../../common/response";
import { ProductDto } from "./dto/get-product.dto";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod != "GET") {
    return new ErrorResponse(400, "Invalid HttpMethod");
  }

  const productService = new ProductService();

  const productList = await productService.getAllProducts();

  const apiResponse = new ResponseDto<ProductDto[]>(200, productList);

  return apiResponse;
};
