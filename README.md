# Calling StepFunction from API Gateway using AWS CDK

In this project we called a step funciton using API Gateway using AWS CDK with typescript language.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template



### Call Step funciton using api-gateway

add your _api-id_ , _region_ before executing below 
```bash
curl -X POST\
 'https://<api-id>.execute-api.<region>.amazonaws.com/prod' \
 -d '{"key":"Hello Step Functions"}' \
 -H 'Content-Type: application/json'

```
