
/**
 * formatRequest(): allows developers to format the request object
 * @param {Object} req Mock Object to format
 * @return {Object} formatted request mock object
 */
function formatRequest(req) {
  return {
    body: req.body,
    params: req.params,
    query: req.query,
  };
}

/**
 * formatResponse(): allows developers to format a Mock response object
 * @return {Object} formatted response mock object
 */
function formatResponse() {
  return {
    json: async (data) => {
      return await JSON.stringify(data);
    },
    send: (data) => {
      return data;
    },
    status: (code) => {
      return code;
    },
  };
}

module.exports = {
  formatRequest,
  formatResponse,
};
