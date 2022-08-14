import { APIGatewayProxyEvent } from "aws-lambda";
import { HttpMethod } from "aws-sdk/clients/appmesh";

export const generateLambdaEvent = (
  path: string,
  method: HttpMethod,
  requestBody: any
): APIGatewayProxyEvent => {
  const event: APIGatewayProxyEvent = {
    httpMethod: method,
    body: requestBody,
    headers: {},
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: path,
    pathParameters: {},
    queryStringParameters: {},
    requestContext: {
      accountId: "123456789012",
      apiId: "1234",
      authorizer: {},
      httpMethod: method,
      identity: {
        accessKey: "",
        accountId: "",
        apiKey: "",
        apiKeyId: "",
        caller: "",
        clientCert: {
          clientCertPem: "",
          issuerDN: "",
          serialNumber: "",
          subjectDN: "",
          validity: { notAfter: "", notBefore: "" },
        },
        cognitoAuthenticationProvider: "",
        cognitoAuthenticationType: "",
        cognitoIdentityId: "",
        cognitoIdentityPoolId: "",
        principalOrgId: "",
        sourceIp: "",
        user: "",
        userAgent: "",
        userArn: "",
      },
      path: path,
      protocol: "HTTP/1.1",
      requestId: "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
      requestTimeEpoch: 1428582896000,
      resourceId: "123456",
      resourcePath: path,
      stage: "dev",
    },
    resource: "",
    stageVariables: {},
  };

  return event;
};
