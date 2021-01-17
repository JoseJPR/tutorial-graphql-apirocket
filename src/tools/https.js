// Import main dependencies.
import https from 'https';

// Import configuration.
import MESSAGE from '../config/message.js';

const Https = {
  /**
   * @name request
   * @description Method to send https requests
   * @param {object} options Object with hostname, token and query params.
   * @returns {Promises} Return a promise.
   */
  request: (options) => {
    return new Promise((resolve, reject) => {
      // Control the required params.
      if (!options.hostname || !options.token || !options.query)
        reject(MESSAGE.paramsRequestRequired);

      // Control that the query param is or not a string.
      if (typeof options.query === 'object')
        reject(MESSAGE.paramsQueryString);

      const { hostname, token, query } = options;

      const req = https.request({
        hostname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      }, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            data,
          });
        })
      });

      req.on('error', (err) => {
        reject(err);
      });

      req.write(JSON.stringify({ query }));
      req.end();
    })
  }
};

export default Https;
