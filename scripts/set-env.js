const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = './src/environments/environment.ts';

const envConfigFile = `
export const environment = {
  apiUrl: '${process.env.FRONTEND_SERVER_API_URL}'
};
`;

fs.writeFileSync(targetPath, envConfigFile, {
  encoding: 'utf8'
});

console.log('environment.ts generated from .env');
