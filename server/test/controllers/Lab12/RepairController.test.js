// eslint-disable-next-line max-len
const ControllerTestUtil = require('../ControllerTestUtil');
const ExerciseController = require('../../../controllers/lab12/ExerciseController');
const ExerciseService = require('../../../services/lab12/ExerciseService');

// eslint-disable-next-line max-len

//TEMPORARY
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
});