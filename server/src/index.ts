import { Server } from 'http';
import { AddressInfo } from 'net';
import express from 'express';
import morgan from 'morgan';
import { mfcRouter } from 'cb-react-micro-frontend-server';

const app = express();
app.use(morgan('dev'));
app.use(mfcRouter);

const server: Server = app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Server started at port ${(server.address() as AddressInfo).port}`,
  ),
);
