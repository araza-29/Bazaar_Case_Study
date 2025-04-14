const db = require("../Model")
const stockLog = db.stockLog

const reviewStockLogs = async(req, res) => {
    try{
        const stockLogs = await stockLog.findAll({})
        if(stockLogs){
            res.status(200).json({code: 200, data: stockLogs})
        }
        else {
            res.status(404).json({code: 404, data: "StockLogs not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewStockLogsByStockLogID = async(req, res) => {
    try{
        const stockLogs = await stockLog.findOne({where:{id:req.body.id}})
        if(stockLogs){
            res.status(200).json({code: 200, data: stockLogs})
        }
        else {
            res.status(404).json({code: 404, data: "StockLogs not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createStockLog = async(req, res) => {
    try{
        const stockLogs = await stockLog.create({product_id: req.body.product_id, stock: req.body.stock, details: req.body.details, verifiedBy: req.body.verifiedBy, orderedBy: req.body.orderedBy, price: req.body.price})
        if(stockLogs){
            res.status(200).json({code: 200, data: stockLogs})
        }
        else {
            res.status(404).json({code: 404, data: "StockLogs not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const updateStockLog = async(req, res) => {
    try{
        const stockLogs = await stockLog.update(req.body, {where: {id: req.body.id }})
        if(stockLogs){
            res.status(200).json({code: 200, data: stockLogs})
        }
        else {
            res.status(404).json({code: 404, data: "StockLogs not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteStockLog = async(req, res) => {
    try{
        const stockLogs = await stockLog.destroy({status: false},{where:{id:req.params.id}})
        if(stockLogs){
            res.status(200).json({code: 200, data: stockLogs})
        }
        else {
            res.status(404).json({code: 404, data: "StockLogs not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {
    reviewStockLogs,
    reviewStockLogsByStockLogID,
    deleteStockLog,
    updateStockLog,
    createStockLog
}
