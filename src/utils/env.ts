import 'dotenv/config';
import { EnvKey } from '../constants';

export function getEnvVariable(key: EnvKey): string {
  if (!process.env.hasOwnProperty(key)) {
    throw new Error(`Error in getting ${key} value please check .env file`);
  }
  return process.env[key]!;
}

export function getEnvVariableOrWarn(key: EnvKey): string {
  if (!process.env.hasOwnProperty(key)) {
    console.warn(`Error in getting ${key} value, please check .env file`);
    return '';
  }
  return process.env[key]!;
}
