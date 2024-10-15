/* eslint-disable max-len */
const GroupService = require('../services/GroupService');

const getGroupLabs = async (req, res) => {
  try {
    const data = await GroupService.getGroupLabs(req.params.groupID);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error while fetching group labs', error);
    res.status(500).json({message: error.message});
  }
};

const getGroupEnrolledStudents = async (req, res) => {
  try {
    const data = await GroupService.getGroupEnrolledStudents(req.params.groupID);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error while getting students group', error);
    res.status(500).json({message: error.message});
  }
};

const getCompletedGroupLabs = async (req, res) => {
  try {
    const data = await GroupService.getCompletedGroupLabs(req.params.userID, req.params.groupID);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error while getting completed group labs', error);
    res.status(500).json({message: error.message});
  }
};

const enrollUserInGroup = (req, res) => {
  GroupService.enrollUserInGroup(
      req.body.userID,
      req.body.inviteCode,
  ).then((response) => {
    // todo: figure out how to send status code along with message,
    // right now, the status is repeated and code doesn't look clean
    if (response.status === 'success') {
      res.status(200).json({
        status: 200,
        message: response.message,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: response.message,
      });
    }
  });
};

const unenrollUserFromGroup = (req, res) => {
  GroupService.unenrollUserFromGroup({
    userID: req.body.userID,
    groupID: req.body.groupID,
  }).then(() => {
    res.sendStatus(200);
  });
};

const createGroup = async (req, res) => {
  try {
    const data = await GroupService.createGroup(
        req.body.userID,
        req.body.groupName,
        req.body.color,
    );
    console.warn('Group Controller Color:', req.body.color);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error while creating group', error);
    res.status(500).json({error: error.message});
  }
};

const addGroupLab = async (req, res) => {
  try {
    const lab = await GroupService.addGroupLab(
        req.body.groupID,
        req.body.labID,
    );
    res.status(200).json(lab);
  } catch (error) {
    console.error('Error while adding lab to group', error);
    res.status(500).json({error: error.message});
  }
};

const deleteGroupLab = async (req, res) => {
  try {
    await GroupService.deleteGroupLab(
        req.body.groupID,
        req.body.labID,
    );
    res.status(200).send('Lab successfully deleted!');
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const deleteGroup = async (req, res) => {
  try {
    const data = await GroupService.deleteGroup(
        req.body.groupID,
    );
    res.status(200).json(data);
  } catch (error) {
    console.error('Error while deleting group:', error);
    res.status(500).json({error: error.message});
  }
};

const updateGroup = async (req, res) => {
  try {
    await GroupService.updateGroup(
        req.body.groupID,
        req.body.groupName,
    );
    res.status(200).send('Group name successfully updated!');
  } catch (error) {
    console.error('Error in updating groupName:', error);
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  updateGroup,
  deleteGroup,
  deleteGroupLab,
  addGroupLab,
  createGroup,
  unenrollUserFromGroup,
  enrollUserInGroup,
  getCompletedGroupLabs,
  getGroupEnrolledStudents,
  getGroupLabs,
};
