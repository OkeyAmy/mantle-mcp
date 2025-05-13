const spawn = require('cross-spawn');
const path = require('path');

// Define environment variables
const env = {
  ...process.env,
  NODE_ENV: 'production',
  REDIS_URL: 'redis://default:M9F4g2obxANKO1wzQjnJtS8dRCq4SVeJ@redis-10515.c281.us-east-1-2.ec2.redns.redis-cloud.com:10515'
};

// Register ts-node to handle TypeScript
require('ts-node/register');

// Require the server directly
require('./api/server.ts');

// Get the path to tsx in node_modules
const tsxPath = path.join(__dirname, 'node_modules', '.bin', 'tsx.cmd');

// Start the server using npx tsx
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const server = spawn(npx, ['tsx', 'api/server.ts'], {
  stdio: 'inherit',
  env
});

server.on('exit', (code) => {
  console.log(`Server exited with code ${code}`);
}); 