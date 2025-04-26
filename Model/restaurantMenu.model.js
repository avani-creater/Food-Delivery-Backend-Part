import mongoose from 'mongoose';
import mongooose from 'mongoose';
const {Schema}=mongooose;

const restaurantMenuSchema = new Schema({
    name:String,
    imageUrl:String,
    description:String,
    defaultPrice:String,
    restaurantId:String,
});

const restaurantMenuModel = mongoose.model('RestaurantMenuItems', restaurantMenuSchema);

export default restaurantMenuModel;