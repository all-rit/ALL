const labService = require('../../services/LabService');
const db = require('../../database');
const labCount = 11;

afterAll(() => {
  db.sequelize.close();
});
describe(('Testing Lab service'), () => {
  test('test Retrieving all Labs ', async () => {
    const getLabs = (await labService.getAllLabs());
    const labs = await db.Labs.findAll({
      raw: true,
    });
    expect(labs).toEqual(getLabs);
  });


  test('test Retrieving Lab Short Name', async () => {
    for (let labID = 1; labID <= labCount; labID++) {
      const shortName = await db.Labs.findOne({
        where: {id: labID},
        attributes: ['labShortName'],
        raw: true,
      });
      const getShortName = await labService.getLabShortName(labID);
      expect(shortName).toEqual(getShortName);
    }
  });

  test('test Retrieving Lab About', async () => {
    for (let labID = 1; labID <= labCount; labID++) {
      const about = await db.Labs.findOne({
        where: {id: labID},
        attributes: ['about'],
        raw: true,
      });
      const getAbout = await labService.getLabAbout(labID);
      expect(about).toEqual(getAbout);
    }
  });


  test('test Retrieving Lab Reading', async () => {
    for (let labID = 1; labID <= labCount; labID++) {
      const reading = await db.Labs.findOne({
        where: {id: labID},
        attributes: ['reading'],
        raw: true,
      });
      const getReading = await labService.getLabReading(labID);
      expect(reading).toEqual(getReading);
    }
  });

  test('test Retrieving Lab Reinforcement', async () => {
    for (let labID = 1; labID <= labCount; labID++) {
      const reinforcement = await db.Labs.findOne({
        where: {id: labID},
        attributes: ['reinforcement'],
        raw: true,
      });
      const getReinforcement = await labService.getLabReinforcement(labID);
      expect(reinforcement).toEqual(getReinforcement);
    }
  });

  test('test Retrieving Lab Quiz', async () => {
    for (let labID = 1; labID <= labCount; labID++) {
      const quiz = await db.Labs.findOne({
        where: {id: labID},
        attributes: ['quiz'],
        raw: true,
      });
      const getQuiz = await labService.getLabQuiz(labID);
      expect(quiz).toEqual(getQuiz);
    }
  });
});

describe(('Error Tests Lab Service'), () => {
  test('test Retrieving Lab Short Name non existent', async () => {
    const labID = 100;
    const getShortName = await labService.getLabShortName(labID);
    expect(getShortName).toEqual('Error: Short Name Not Found');
  });
  test('test Retrieving Lab Short Name with actual error', async () => {
    const labID = 'testing';
    const getShortName = await labService.getLabShortName(labID);
    expect(getShortName).toEqual('Error: Short Name Not Retrieved');
  });

  test('test Retrieving Lab About non existent ', async () => {
    const labID = 100;
    const getAbout = await labService.getLabAbout(labID);
    expect(getAbout).toEqual('Error: About Not Found');
  });
  test('test Retrieving Lab About Name with actual error', async () => {
    const labID = 'testing';
    const getAbout = await labService.getLabAbout(labID);
    expect(getAbout).toEqual('Error: About Not Retrieved');
  });
  test('test Retrieving Lab Reading non existent', async () => {
    const labID = 100;
    const getReading = await labService.getLabReading(labID);
    expect(getReading).toEqual('Error: Reading Not Found');
  });
  test('test Retrieving Lab Reading with actual error', async () => {
    const labID = 'testing';
    const getReading = await labService.getLabReading(labID);
    expect(getReading).toEqual('Error: Reading Not Retrieved');
  });
  test('test Retrieving Lab Reinforcement non existent', async () => {
    const labID = 100;
    const getReinforcement = await labService.getLabReinforcement(labID);
    expect(getReinforcement).toEqual('Error: Reinforcement Not Found');
  });
  test('test Retrieving Lab Reinforcement with actual error', async () => {
    const labID = 'testing';
    const getReinforcement = await labService.getLabReinforcement(labID);
    expect(getReinforcement).toEqual('Error: Reinforcement Not Retrieved');
  });
  test('test Retrieving Lab Quiz non existent', async () => {
    const labID = 100;
    const getQuiz = await labService.getLabQuiz(labID);
    expect(getQuiz).toEqual('Error: Quiz Not Found');
  });
  test('test Retrieving Lab Quiz with actual error', async () => {
    const labID = 'testing';
    const getQuiz = await labService.getLabQuiz(labID);
    expect(getQuiz).toEqual('Error: Quiz Not Retrieved');
  });
});
