import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class StepfunctionsRestApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const startState = new stepfunctions.Pass(this, 'PassState', {
      result: { value: 'Hello back to you' },
    });

    const stateMachine = new stepfunctions.StateMachine(
      this,
      'CDKStateMachine',
      {
        definition: startState,
        stateMachineType: stepfunctions.StateMachineType.EXPRESS,
      }
    );

    const api = new apigateway.StepFunctionsRestApi(
      this,
      'CDKStepFunctionRestApi',
      {
        stateMachine: stateMachine,
      }
    );
  }
}
