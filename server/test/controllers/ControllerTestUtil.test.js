const ControllerTestUtil = require('../controllers/ControllerTestUtil');


describe('Test Request formating', () => {
  test('should first', () => {
    const testBody = {
      body: 'test',
    };
    const req = ControllerTestUtil.formatRequest(testBody);
    expect(req.body).toBe('test');
  });

  test('should second', () => {
    const testParams = {
      params: 'test',
    };
    const req = ControllerTestUtil.formatRequest(testParams);
    expect(req.params).toBe('test');
  });
});

describe('Test Response formatting', () => {
  test('json response format mock test', () => {
    const responseJson = {test: 'test'};
    const res = ControllerTestUtil.formatResponse();
    expect(res.json(responseJson)).toBe(JSON.stringify(responseJson));
  });

  test('send response format mock test', () => {
    const responseSend = 'test';
    const res = ControllerTestUtil.formatResponse();
    expect(res.send(responseSend)).toBe(responseSend);
  });

  test('return status code mock test', () => {
    const responseStatus = 200;
    const res = ControllerTestUtil.formatResponse();
    expect(res.status(responseStatus)).toBe(responseStatus);
  });
});
