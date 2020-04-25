import { History } from 'history';
import { useEffect } from 'react';

// ===================================
// TODO: Refactor these to lib
export const generateContainerId = (name: string) => `${name}Container`;

const generateScriptId = (name: string) => `microFrontendScript${name}`;

const getMainJsUrl = (host: string, mainJsPath: string) =>
  `${host}${mainJsPath}`;

const getManifestUrl = (host: string) => `${host}/asset-manifest.json`;

const fetchManifest = (host: string) =>
  fetch(getManifestUrl(host)).then(res => res.json() as Promise<Manifest>);

const fetchMainJsUrl = (host: string) =>
  fetchManifest(host).then(({ files: { 'main.js': mainJsPath } }) =>
    getMainJsUrl(host, mainJsPath),
  );

const renderMicroFrontend = ({
  history,
  name,
  win,
}: {
  history: History;
  name: string;
  win: Window;
}) => win.render[name]?.(generateContainerId(name), history);

const unmountMicroFrontend = ({ name, win }: { name: string; win: Window }) =>
  win.unmount?.[name]?.(generateContainerId(name));

interface Manifest {
  files: {
    'main.js': string;
    'main.js.map': string;
    'index.html': string;
  };
  entrypoints: string[];
}
// ===================================

export const useMicroFrontend = ({
  doc,
  history,
  host,
  name,
  win,
}: {
  doc: Document;
  history: History;
  host: string;
  name: string;
  win: Window;
}) =>
  useEffect(() => {
    const scriptId = generateScriptId(name);
    let isCanceled = false;

    if (doc.getElementById(scriptId)) {
      renderMicroFrontend({ history, name, win });
    } else {
      fetchMainJsUrl(host).then(mainJsUrl => {
        if (isCanceled) return;
        const script = doc.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = mainJsUrl;
        script.onload = () => {
          if (isCanceled) return;
          renderMicroFrontend({ history, name, win });
        };
        doc.head.appendChild(script);
      });
    }

    return () => {
      unmountMicroFrontend({ name, win });
      isCanceled = true;
    };
  }, [doc, history, host, name, win]);
