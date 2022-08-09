import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import sha256 from 'crypto-js/sha256';

export const getAllItemsHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  const hashDigest = sha256("sebin");

  const response = {
    statusCode: 200,
    body: JSON.stringify(["Apples", "Oranges", "Grapes"]),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
