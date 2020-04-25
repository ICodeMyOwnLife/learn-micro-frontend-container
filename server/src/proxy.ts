import { resolve } from 'url';
import { Express, Request } from 'express';

const mfInfoKey = '_mfInfo';
const mfInfoRegex = new RegExp(`\\b${mfInfoKey}=(\\{.+?\\})`);

const getMfInfo = (req: Request) => {
  const text = ((req.headers.cookie as string) || null)?.match(
    mfInfoRegex,
  )?.[1];
  return text ? (JSON.parse(text) as MicroFrontendInfo) : undefined;
};

const useProxy = (app: Express) => {
  app.get('/*.js', (req, res, next) => {
    console.log(req.url);
    console.log(req.headers.cookie);
    if (req.url.match(/\.mfc\.js$/)) return next();
    const mfInfo = getMfInfo(req);
    console.log(mfInfo);
    if (!mfInfo) return next();
    const redirectUrl = resolve(mfInfo.host, req.url);
    return res.redirect(redirectUrl);
  });
};

export default useProxy;

interface MicroFrontendInfo {
  host: string;
  name: string;
}
