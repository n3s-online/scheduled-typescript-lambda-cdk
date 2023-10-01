#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CronOptions } from "aws-cdk-lib/aws-events";
import { config } from "dotenv";
import "source-map-support/register";
import { TypescriptLambdaStack } from "../lib/typescript-lambda-stack";
import { EnvironmentVariables } from "../src/environment";
import { LambdaEvent } from "../src/lambdaHandler";
config();

const app = new cdk.App();

const lambdaEvent: LambdaEvent = {
  message: "Scheduled message",
};
// Cron Rule is in UTC
const cronRule: CronOptions = {
  hour: "22",
  minute: "45",
};

const environment: EnvironmentVariables = {
  // add environment variables here
  // VARIABLE: process.env.VARIABLE
};

new TypescriptLambdaStack(app, "TypescriptLambdaStack", {
  events: [{ event: lambdaEvent, schedule: cronRule }],
  environment,
});
