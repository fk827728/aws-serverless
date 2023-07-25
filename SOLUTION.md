How to run it:

1. Run `npm install`.
2. Run `serverless invoke local --function weatherApi --data '{\"city\":\"Adelaide\",\"countryCode\":\"au\"}'` on localhost to test lambda function.
3. Run `serverless invoke local --function weatherApi --data '{\"city\":\"Adelaide\",\"countryCode\":\"\"}'` on localhost to test lambda function exception.
4. Run `serverless offline start` on localhost and get the x-api-key, then use postman to request `http://localhost:3000/development/weather?city=Adelaide&countryCode=au` with x-api-key to test API.
5. Run `serverless offline start` on localhost and get the x-api-key, then use postman to request `http://localhost:3000/development/weather?city=Adelaide&countryCode=` with x-api-key to test API exception.

What I need to say:

1. We should put API_KEY and BASE_URL in parameter store on AWS, I use dotenv to mock on my localhost
2. I am confused about the payload and the return value moment(). It is a GET API which doesn't need any payload for this API and it should receive 2 strings and return a response.
3. I didn't work the HttpClient out, so I directly use axios to request.
4. If I have time, I can protect your API using strategies like generating SSL certificates, configuring a web application firewall, setting throttling targets, and only allowing access to your API from a Virtual Private Cloud (VPC) .
5. I can use Joi to validate the model schema.

**Notes:**

1. Define Interface
2. Split Functions
3. Constant
4. Environment Variables
5. Santitize
6. Validation
7. Try-Catch
8. Testing
