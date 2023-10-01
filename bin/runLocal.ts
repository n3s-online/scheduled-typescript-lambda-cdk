import { config } from "dotenv";
config();

import { Context } from "aws-lambda";
import * as userCode from "../src/lambdaHandler";

const localEvent: userCode.LambdaEvent = {
  message: "Hello World",
};

const response = userCode.handler(localEvent, {} as Context, () => {});

console.log(response);
