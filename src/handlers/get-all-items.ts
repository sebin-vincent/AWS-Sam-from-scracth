import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import sha256 from 'crypto-js/sha256';

export const getAllItemsHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getAllItems only accept GET method, you tried: ${event.httpMethod}`
    );
  }

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
