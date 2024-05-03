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

  test('test get all Short Name strings with controller', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: i}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabShortNameController(req, res);
      const expected = await LabService.getLabShortName(i);
      expect(response).toBe(JSON.stringify([expected]));
    }
  });

  test('test get all Reading sections info', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: i}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabReadingController(req, res);
      const expected = await LabService.getLabReading(i);
      expect(response).toBe(JSON.stringify([expected]));
    }
  });

  test('test get all quizzes to see if they are valid', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: i}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabReinforcementController(
          req,
          res);
      const expected = await LabService.getLabReinforcement(i);
      expect(response).toBe(JSON.stringify([expected]));
    }
  });

  test('test get all labs to see if they are valid', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: i}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabQuizController(req, res);
      const expected = await LabService.getLabQuiz(i);
      expect(response).toBe(JSON.stringify([expected]));
    }
  });
});


describe('Test LabController for unsuccessful Payloads', () => {
  test('test get all about sections info', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: 'test'}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabAboutController(req, res);
      expect(response).toBe(
          JSON.stringify(['Error: About Not Retrieved']));
    }
  });

  test('test get all Short Name strings with controller', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: 'test'}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabShortNameController(req, res);
      expect(response).toBe(
          JSON.stringify(['Error: Short Name Not Retrieved']),
      );
    }
  });

  test('test get all Reading sections info', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: 'test'}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabReadingController(req, res);
      expect(response).toBe(
          JSON.stringify(['Error: Reading Not Retrieved']),
      );
    }
  });

  test('test get all quizzes to see if they are valid', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: 'test'}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabReinforcementController(
          req,
          res);
      expect(response).toBe(
          JSON.stringify(['Error: Reinforcement Not Retrieved']));
    }
  });

  test('test get all labs to see if they are valid', async () => {
    for (let i = 1; i <= labCount; i++) {
      const req = ControllerTestUtil.formatRequest({params: {labID: 'test'}});
      const res = ControllerTestUtil.formatResponse();
      const response = await LabController.getLabQuizController(req, res);
      expect(response).toBe(
          JSON.stringify(['Error: Quiz Not Retrieved']));
    }
  });
});
