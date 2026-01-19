const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = './src/environments/environment.ts';
const apiUrl = process.env.FRONTEND_SERVER_API_URL || '/api';
const envConfigFile = `
export const environment = {
  apiUrl: '${apiUrl}'
};
`;

fs.writeFileSync(targetPath, envConfigFile, {
  encoding: 'utf8'
});

console.log('environment.ts generated from .env');
