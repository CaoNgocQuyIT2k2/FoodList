import { https } from "../../service/service.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { showMon } from "../v1/main-v1.js";
import { renderFoodList } from "./controller-v2.js";

let dssp = [];

let fetchFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      dssp = res.data
      renderFoodList(dssp);
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
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editFood = (id) => {
  $("#exampleModal").modal("show");
  https
    .get(`/food/${id}`)
    .then((res) => {
      console.log("🚀 ~ res:", res);
      showMon(res.data);
    })
    .catch((err) => {
      console.log("🚀 ~ err:", err);
    });
};

window.updateFood = () => {
  let food = layThongtinTuForm();
  https
    .put(`/food/${food.ma}`, food)
    .then((res) => {
      fetchFoodList();
      $("#exampleModal").modal("hide");
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.filterProducts = () => {
  var filterSelect = document.getElementById("selLoai");
  var selectedOption = filterSelect.value;
  
  var filteredProducts;

  if (selectedOption === "all") {
    filteredProducts = dssp; // Hiển thị tất cả sản phẩm
  } else {
    filteredProducts = dssp.filter(function (food) {
      if (selectedOption === "loai1" && food.loai === true) {
        return true; // Lọc sản phẩm có 'loai' là true (chay)
      } else if (selectedOption === "loai2" && food.loai === false) {
        return true; // Lọc sản phẩm có 'loai' là false (mặn)
      }
      return false; // Không lọc sản phẩm này
    });
    console.log("🚀 ~ filteredProducts:", filteredProducts)
  }

  renderFoodList(filteredProducts); // Hiển thị danh sách sản phẩm đã được lọc
};
