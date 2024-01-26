import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'User Management API',
    description: 'The User API',
    version: 'v1',
    path: 'api',
  },
};

export default (): Config => config;
