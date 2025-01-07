// eslint-disable-next-line max-len
const ControllerTestUtil = require('../ControllerTestUtil');
const RepairController = require('../../../controllers/lab12/RepairController');

// eslint-disable-next-line max-len
describe('Test successful payloads in Lab 12 RepairController functions', () => {
  test('Test successful submitRepair function', async () => {
    const req = ControllerTestUtil.formatRequest({
      body: {
        userID: 100,
        section: 'FormRepair',
        repair: 'testing submit repair',
        isComplete: false,
      },
    });
    const res = ControllerTestUtil.formatResponse();
    await RepairController.submitChange(req, res);
    expect(res).toBeDefined();
  }),

  test('Test getRepair function', async () => {
    const req = ControllerTestUtil.formatRequest(
        {params: {userID: 100, section: 'FormRepair'}});
    const response = await RepairController.getRepair(req);
    expect(response).toBeDefined();
  });
});

describe('Test failed payloads in Lab 12 RepairController functions', () => {
  test('Test failed getRepair function', async () => {
    const req = ControllerTestUtil.formatRequest(
        {params: {userID: 101, section: 'FormRepair'}});
    const response = await RepairController.getRepair(req);
    expect(response).toBeNull();
  });

  test('Test failed submitRepair function', async () => {
    const req = ControllerTestUtil.formatRequest({
      body: {
        userID: 101,
        section: 'DatabaseRepair',
        repair: '',
        isComplete: false,
      },
    });
    const res = ControllerTestUtil.formatResponse();
    const response = await RepairController.submitChange(req, res);
    expect(response).toBeUndefined();
  });
});
