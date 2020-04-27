import { Server } from 'http';
import { AddressInfo } from 'net';
import { dirname, join } from 'path';
import express from 'express';
import morgan from 'morgan';
import useProxy from './proxy';

const dirClient = join(dirname(dirname(__dirname)), 'client');
const dirClientBuild = join(dirClient, 'build');
console.log('dirClient', dirClient);
const app = express();

app.use(morgan('dev'));
app.use(express.static(dirClientBuild));
useProxy(app);
app.get('/*', (_req, res) => {
  res.sendFile(join(dirClientBuild, 'index.html'));
});

const server: Server = app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Server started at port ${(server.address() as AddressInfo).port}`,
  ),
);
