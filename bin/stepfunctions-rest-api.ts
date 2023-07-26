#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StepfunctionsRestApiStack } from '../lib/stepfunctions-rest-api-stack';
import { Tags } from 'aws-cdk-lib';

const app = new cdk.App();
new StepfunctionsRestApiStack(app, 'StepfunctionsRestApiStack', {});

Tags.of(app).add('Owner', 'sajid.ali@trilogy.com');
