import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ProductService } from "./service";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const productService = new ProductService();

    const productList = await productService.getAllProducts()

    const apiResponse = {
        statusCode : 200,
        body: JSON.stringify(productList)
    }

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${apiResponse.statusCode} body: ${apiResponse.body}`
  );
  return apiResponse;
};
