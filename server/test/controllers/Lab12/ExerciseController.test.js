// eslint-disable-next-line max-len
const ExerciseController = require('../../../controllers/lab12/ExerciseController');
const ControllerTestUtil = require('../ControllerTestUtil');
const ExerciseService = require('../../../services/lab12/ExerciseService');

// eslint-disable-next-line max-len
describe('Test successful payloads in Lab 12 ExerciseController functions', () => {
  test('Test getExercise function', async () => {
    const req = ControllerTestUtil.formatRequest({params: {userID: 100}});
    const res = ControllerTestUtil.formatResponse();
    const response = await ExerciseController.getExercise(req, res);
    const expected = await ExerciseService.getExercise(100);
    console.log(JSON.parse(response).attemptCount);
    expect(JSON.parse(response).attemptCount).toBe((expected).attemptCount);
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
    expect(JSON.parse(response).attemptCount).toBe(JSON.parse(
        expected.attemptCount + 1),
    );
  });
});
