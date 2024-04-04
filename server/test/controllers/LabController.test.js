const LabController = require('../../controllers/LabController');
const ControllerTestUtil = require('../controllers/ControllerTestUtil');
const LabService = require('../../services/LabService');
const labCount = 11;
describe( 'Test LabController for successful Payloads', () => {
  test('Test get all labs', async () => {
    const req = ControllerTestUtil.formatRequest({});
    const res = ControllerTestUtil.formatResponse();
    const response = await LabController.getAllLabsController(req, res);
    expect(response).toBeDefined();
  });

  test('test get all about sections info', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: i}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabAboutController(req, res);
      const expected = await LabService.getLabAbout(i);
      expect(response).toBe(JSON.stringify([expected]));
    }
  });
});
