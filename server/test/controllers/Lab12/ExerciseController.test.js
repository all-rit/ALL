// eslint-disable-next-line max-len
const ControllerTestUtil = require('../ControllerTestUtil');
const ExerciseController = require('../../../controllers/lab12/ExerciseController');
const ExerciseService = require('../../../services/lab12/ExerciseService');

// eslint-disable-next-line max-len
describe('Test successful payloads in Lab 12 ExerciseController functions', () => {
  test('Test getExercise function', async () => {
    const req = ControllerTestUtil.formatRequest({params: {userID: 100}});
    const res = ControllerTestUtil.formatResponse();
    const response = await ExerciseController.getExercise(req, res);
    const expected = await ExerciseService.getExercise(100);
    console.log(JSON.parse(response));
    expect(JSON.parse(response)).toStrictEqual(([
      {
        ...expected,
        attemptTime: new Date(expected.attemptTime).toJSON()
      }
    ]));
  });

  test('Test postExercise function', async () => {
    const req = ControllerTestUtil.formatRequest({
      body: {
        userID: 100,
        isDatabaseRepairComplete: true,
        isFormRepairComplete: true,
        isExerciseComplete: true,
        hasViewed: true,
        attemptCount: 1,
      },
    });
    const res = ControllerTestUtil.formatResponse();
    const response = await ExerciseController.postExercise(req, res);
    const expected = await ExerciseService.getExercise(100);
    expect(JSON.parse(response)[0].attemptCount).toStrictEqual((expected.attemptCount + 1));
  });
});

describe('Test failed payloads in Lab 12 ExerciseController functions', () => {
  test('Test getExercise function fails', async () => {
    const req = ControllerTestUtil.formatRequest({userID: "101"});
    const res = ControllerTestUtil.formatResponse();
    const response = await ExerciseController.getExercise(req, res);
    console.log(response);
    expect(response).toBeUndefined();
  });

  test('Test postExercise function fails', async () => {
    const req = ControllerTestUtil.formatRequest({
      body: {
        isDatabaseRepairComplete: true,
        isFormRepairComplete: true,
        hasViewed: true,
        attemptCount: 1,
      },
    });
    const res = ControllerTestUtil.formatResponse();
    const response = await ExerciseController.postExercise(req, res);
    expect(JSON.parse(response)[0]).toBeNull();
  });
});