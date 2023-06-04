#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TypescriptLambdaStack } from '../lib/typescript-lambda-stack';
import { config } from 'dotenv';
import { LambdaEvent } from '../src/lambdaHandler';
import { CronOptions } from 'aws-cdk-lib/aws-events';
config();

const app = new cdk.App();

const lambdaEvent: LambdaEvent = {
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL!,
  DISCORD_WEBHOOK_USERNAME: "Webby"
};
// Cron Rule is in UTC
const cronRule: CronOptions = {
  hour: '22',
  minute: '45'
};

new TypescriptLambdaStack(app, 'TypescriptLambdaStack', {
  events: [{ event: lambdaEvent, schedule: cronRule }]
});