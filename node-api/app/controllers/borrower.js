var _ = require('lodash');
var BorrowerModel = require("../models/borrower");

module.exports = {
    create(req, res) {
        var borrower = new BorrowerModel(req.body);
        borrower.save(function(err, result) {
            if(err) {
                res.send({
                    status: 500,
                    success: false,
                    message: "create error",
                    error: err
                })
            } else {
                res.send({
                    status: 200,
                    success: true,
                    message: "create success",
                    data: result
                })
            }                
        })
    },
    list(req, res) {
        BorrowerModel.aggregate([
            {
                $lookup: {
                    from: "aggregatorClients",
                    localField: "AggregatorClientId",
                    foreignField: "AggregatorClientId",
                    as: "aggregator_client"
                }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$aggregator_client", 0 ] }, "$$ROOT" ] } }
            },
            { $project: { aggregator_client: 0 } }
        ], function(err, borrowers) {
            if (err) {
                res.send({
                    success: false,
                    status: 500,
                    error: err
                })
            }else {
                res.send({
                    success: true,
                    status: 200,
                    data: borrowers
                })
            }
        });
    },
    getOne(req, res) {
        BorrowerModel.findById(req.params.id, function(err, borrower){
            if(err) {
                res.send({
                    status: 500,
                    success: false,
                    message: err
                }) 
            } else {
                if(borrower) {
                    res.send({
                        status: 200,
                        success: true,
                        message: "get Success",
                        data: borrower
                    })
                } else {
                    res.send({
                        status: 404,
                        success: true,
                        message: "not found"
                    })
                }
            }
        });
    }
}