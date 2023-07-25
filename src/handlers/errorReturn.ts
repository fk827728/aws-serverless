import { APIGatewayProxyResult } from 'aws-lambda'
export const errorReturnResponse = (statusCode: number, responseObject: any): APIGatewayProxyResult => {
    return {
      statusCode,
      body: JSON.stringify(responseObject)
    };
};
