const PageService = require('../services/PageService');

exports.createPage = (req, res) => {
    PageService.createPage({
        usersessionid: req.session.token,
        pagename: req.body.pagename,
        completiontime: req.body.completiontime,
        labid:req.body.labid
    }).then((id) => {
        req.session.page = id;
        res.sendStatus(200);
    });
};
