module.exports = {
  multiMongooseToObj: function (mongooses) {
    return mongooses.map((mongoo) => mongoo.toObject());
  },
  mongooseToObj: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
