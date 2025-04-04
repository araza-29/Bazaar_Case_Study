const db = require("../Model")
const stockLog = db.stockLog

const reviewStockLogs = async(req, res) => {
    const stockLogs = await stockLog.findAll({})
    res.json({code: 200, data: stockLogs})
};

const reviewStockLogsByStockLogID = async(req, res) => {
    const stockLogs = await stockLog.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: stockLogs})
};

const createStockLog = async(req, res) => {
    const stockLogInfo = {
        quantity: req.body.quantity,
        reason: req.body.reason
    }
    const stockLogs = await stockLog.create(stockLogInfo)
    res.json({code: 200, data: stockLogs})
};

const updateStockLog = async(req, res) => {
    const stockLogs = await stockLog.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: stockLogs})
};

const deleteStockLog = async(req, res) => {
    const stockLogs = await stockLog.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("stockLog deleted !")
};

module.exports = {
    reviewStockLogs,
    reviewStockLogsByStockLogID,
    deleteStockLog,
    updateStockLog,
    createStockLog
}
