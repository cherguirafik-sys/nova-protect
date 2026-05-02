import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const repoRoot = path.resolve(new URL(import.meta.url).pathname, '..', '..');
const configPath = path.join(repoRoot, 'lib', 'config.ts');

function extractConfig(contents) {
  const emailMatch = contents.match(/email:\s*["']([^"']+)["']/);
  const passMatch = contents.match(/password:\s*["']([^"']+)["']/);
  const receiveMatch = contents.match(/receiveEmail:\s*["']([^"']+)["']/);
  return {
    email: emailMatch ? emailMatch[1] : process.env.SMTP_EMAIL,
    password: passMatch ? passMatch[1] : process.env.SMTP_PASS,
    receiveEmail: receiveMatch ? receiveMatch[1] : process.env.SMTP_RECEIVE,
  };
}

async function main() {
  let config;
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    config = extractConfig(raw);
  } catch (e) {
    console.warn('Could not read lib/config.ts, falling back to environment variables.');
    config = {
      email: process.env.SMTP_EMAIL,
      password: process.env.SMTP_PASS,
      receiveEmail: process.env.SMTP_RECEIVE,
    };
  }

  if (!config.email || !config.password) {
    console.error('SMTP email or password not found. Set them in lib/config.ts or via env vars: SMTP_EMAIL, SMTP_PASS');
    process.exit(2);
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.password.replace(/\s+/g, ''),
    },
  });

  console.log('Verifying SMTP connection for', config.email);

  transporter.verify((err, success) => {
    if (err) {
      console.error('SMTP verification failed:', err);
      process.exit(1);
    } else {
      console.log('SMTP connection OK');
      process.exit(0);
    }
  });
}

main();
