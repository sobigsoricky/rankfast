import corsAnywhere from 'cors-anywhere';

// Create a new instance of the cors-anywhere server
const proxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // Do not require any headers.
  removeHeaders: [] // Do not remove any headers.
});

// Attach the cors-anywhere server to a Next.js API route
export default function handler(req, res) {
  // Strip '/proxy' from the front of the URL, else the proxy won't work
  req.url = req.url.replace('/proxy/', '/');
  
  // Proxy the request to the destination server using the cors-anywhere server
  proxy.emit('request', req, res);

}
