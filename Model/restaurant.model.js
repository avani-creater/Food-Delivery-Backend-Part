
import mongoose from 'mongoose';
import mongooose from 'mongoose';
const {Schema}=mongooose;

const restaurantSchema = new Schema({
    name:String,
    imageUrl:String,
    rating:String,
    cuisines:String,
    deliveryTime :String
})

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

export default restaurantModel;
