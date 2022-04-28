const {orderService} = require('../services')

module.exports = {
    getOrder: (req, res)=>{
        try{
            const result = await orderService.getOrder(req.user)

            return res.status(200).json({message: 'success', result: result}) 
        }
        catch(err){
            return res.status(err.status || 400).json({message: err.message || 'error'})
        }
    },
    addOrder: async(req, res)=>{
        const t = await db.sequelize.transaction();
        try{
            if(!req.body.email) throw {status: 400, message: 'email is is necessary'}

            const result = await orderService.addOrder(req.user, cart_id, t)

            return res.status(200).json({message: 'success', result: result}) 
        }
        catch(err){
            return res.status(err.status || 400).json({message: err.message || 'error'})
        }
    },
    updateOrder: async(req, res)=>{
        try{
            if(!req.body.email) throw {status: 400, message: 'email is is necessary'}

            const result = await orderService.updateOrder(req.body.order_id)

            return res.status(200).json({message: 'success', result: result}) 
        }
        catch(err){
            return res.status(err.status || 400).json({message: err.message || 'error'})
        }
    }
}