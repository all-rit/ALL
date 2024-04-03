const labService = require('../../services/LabService');
const db = require('../../database');


test('test Retrieving all Labs ', async () => {
  const getLabs = (await labService.getAllLabs());
  const labs = await db.Labs.findAll({
    raw: true,
  });

  expect(labs).toEqual(getLabs);
});
