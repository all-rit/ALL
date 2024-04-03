const LabController = require('../../controllers/LabController');
const ControllerTestUtil = require('../controllers/ControllerTestUtil');

describe( '', () => {
  test('Test get all labs', async () => {
    const req = ControllerTestUtil.formatRequest({});
    const res = ControllerTestUtil.formatResponse();
    await LabController.getAllLabsController(req, res);
    // expect().toBe(200);
  });
});
