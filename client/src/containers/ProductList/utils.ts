import { useState, useCallback } from 'react';
import { API_HOST } from 'constants/hosts';

export const useProductList = () => {
  const [ids, setIds] = useState<string[]>();

  const handleGetIds = useCallback(async () => {
    const res = await fetch(`${API_HOST}/ids`, {
      /**
       * indicates whether the user agent should send cookies from the other domain in the case of cross-origin requests
       * omit: Never send or receive cookies
       * same-origin: Send user credentials (cookies, basic http auth, etc..) if the URL is on the same origin as the calling script. This is the default value.
       * include: Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
       */
      credentials: 'include',
      headers: { contentType: 'application/json' },
      method: 'GET',
      /**
       * determines if cross-origin requests lead to valid responses, and which properties of the response are readable
       * same-origin — If a request is made to another origin with this mode set, the result is simply an error. You could use this to ensure that a request is always being made to your origin
       * no-cors — Prevents the method from being anything other than HEAD, GET or POST, and the headers from being anything other than simple headers.
       * cors — Allows cross-origin requests, for example to access various APIs offered by 3rd party vendors. These are expected to adhere to the CORS protocol. Only a limited set of headers are exposed in the Response, but the body is readable.
       * navigate — A mode for supporting navigation. The navigate value is intended to be used only by HTML navigation. A navigate request is created only while navigating between documents.
       */
      mode: 'cors',
    });
    const response = await res.json();
    setIds(response.ids);
  }, []);

  return { handleGetIds, ids };
};
