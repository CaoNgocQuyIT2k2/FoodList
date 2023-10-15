import { layThongtinTuForm } from "./controller-v1.js";

let themMon = () => {
  let data = layThongtinTuForm();
  console.log("😀 - themMon - data", data);
  // destructuring
  let { ma, ten, loai, gia, hinhAnh, tinhTrang, moTa, khuyenMai } = data;
  // show data 
  document.getElementById("spMa").innerText = ma;
  document.getElementById("spTenMon").innerText = ten;
  document.getElementById("spLoaiMon").innerText = loai;
  document.getElementById("spGia").innerText = gia;
  document.getElementById("spTT").innerText = tinhTrang == "0" ? "Hết" : "Còn";
  document.getElementById("imgMonAn").src = hinhAnh;
  document.getElementById("pMoTa").innerText = moTa;
  document.getElementById("spKM").innerText = khuyenMai + "%";
  document.getElementById("spGiaKM").innerText = data.tinhGKM();
};

window.themMon = themMon;

// 
const monChay = "loai1"
const monMan = "loai2"
const chay = true;

const hetMon = "0"
const conMon = "1"
const con = true;

const khuyenMai10 = "10"
const khuyenMai20 = "20"
const km10 = true;

export let showMon = (food) => {
  let {ma,ten,loai,gia,khuyenMai,tinhTrang,hinhAnh,moTa} = food;
      document.getElementById("foodID").value = ma;
      document.getElementById("tenMon").value = ten;
      document.getElementById("loai").value = loai == chay ? monChay : monMan;
      document.getElementById("giaMon").value = gia;
      document.getElementById("khuyenMai").value = khuyenMai == km10 ? khuyenMai10 : khuyenMai20;
      document.getElementById("tinhTrang").value = tinhTrang == con ? conMon : hetMon;
      document.getElementById("hinhMon").value = hinhAnh;
      document.getElementById("moTa").value = moTa;
}
window.showMon = showMon
