import { createRestaurant, deleteOneRestaurant, fetchRestaurants, updateOneRestaurant} from "../Controller/restaurant.controller.js";
import { verifyUser } from "../Middlewares/verifyUser.js";


export function routes(app){
app.post("/api/restaurant",createRestaurant);
app.get("/api/restaurants", fetchRestaurants);
app.put("/api/restaurant/:id",updateOneRestaurant);
app.delete("/api/restaurant/:id",deleteOneRestaurant);
}

