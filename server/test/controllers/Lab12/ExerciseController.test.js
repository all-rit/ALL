// eslint-disable-next-line max-len
const ExerciseController = require('../../../controllers/lab12/ExerciseController');
const ControllerTestUtil = require('../ControllerTestUtil');
const ExerciseService = require('../../../services/lab12/ExerciseService');

// eslint-disable-next-line max-len
describe('Test successful payloads in Lab 12 ExerciseController functions', () => {
  test('Test getExercise function', async () => {
    const req = ControllerTestUtil.formatRequest({params: {userID: 1}});
    const res = ControllerTestUtil.formatResponse();
    const response = await ExerciseController.getExercise(req, res);
    const expected = await ExerciseService.getExercise(1);
    console.log(response);
    expect(response).toBe(JSON.stringify([expected]));
  });
});
