const Prices = require("../models/prices");

const findById = async (id) => {
    try{
      const price = await Prices.findById(id)
      console.log(price);
      return {
        success : true,
        data : price
      }
    }catch(err){
      return {
        success : false,
        err : err.message
      }
    }
  }
const findAll = async () => {
  try{
      const prices = await Prices.find();
      return {
          success: true,
          data: prices
      }
  }catch(e){
      return {
          success: false,
          Error: e.message
      }
  }
}

const create = async (newPrice) => {
    try{
        const createdPrice = await Prices.create(newPrice);
        return {
            success: true,
            data: createdPrice
        }
    }catch (e){
        return{
            success: false,
            Error: e.message
        }
    }
}

const update = async (cat_id, newPrice) => {
  try{
    const price = await Prices.findById(cat_id)
    price.price = newPrice.price
    price.source = newPrice.source

    await price.save()
    return {
      success : true,
      data : price
    }
  }catch(err){
    return{
      success : false,
      err : err.message
    }
  }
}

const remove = async (id) => {
  try{
    await Prices.deleteOne({_id: id})
    return{
        success: true,
        Data: "Deleted"
    }
  }catch(e){
    return {
          success: false,
          Error: e.message
      }
  }
}

module.exports = {
  update,
  remove,
  findAll,
  create,
  findById
}