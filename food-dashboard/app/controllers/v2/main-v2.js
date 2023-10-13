import { https } from "../../service/service.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { renderFoodList } from "./controller-v2.js";

let fetchFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// load trang
fetchFoodList();
function deleteFood(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
}

window.deleteFood = deleteFood;

window.addFood = () => {
  let food = layThongtinTuForm();
  https
    .post("/food", food)
    .then((res) => {
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log(err);
    });
};
