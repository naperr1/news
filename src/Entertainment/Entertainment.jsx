import React from "react";
import "./Entertainment.css";
import infor7 from "./imgInfor/infor7.svg";
import { GrLinkNext } from "react-icons/gr";
import infoNext from "./imgInfor/iconNext.svg";

const Entertainment = () => {
  return (
    <div>
      <div class="wrapBaner">
        <h1>Giải trí</h1>
        <div class="banner1">
          <a target="_blank" href="https://www.youtube.com/watch?v=yMuBSxSIS04">
            <button>Tìm hiểu ngay</button>
          </a>
          <p>Âm nhạc là thứ giúp chúng ta quên âu lo</p>
        </div>
        <div class="arrayBanner">
          <div class="bannerItem1">
            <a
              href="https://topshare.com.vn/top-list/top-10-tua-game-sap-ra-mat-dang-mong-cho-nhat-2023-11138.html"
              target="_blank"
            >
              <button>Tìm hiểu ngay</button>
            </a>
            <p>Các trò chơi hay nhất 2023</p>
          </div>
          <div class="bannerItem2">
            <a
              href="https://www.youtube.com/watch?v=59utJAEoZF8"
              target="_blank"
            >
              <button>Tìm hiểu ngay</button>
            </a>
            <p>Âm nhạc là thứ giúp chúng ta quên âu lo</p>
          </div>
          <div class="bannerItem3">
            <a
              href="https://topshare.com.vn/top-list/top-10-tua-game-sap-ra-mat-dang-mong-cho-nhat-2023-11138.html"
              target="_blank"
            >
              <button>Tìm hiểu ngay</button>
            </a>
            <p>Những bài hát hay nhất 2023</p>
          </div>
          <div class="bannerItem4">
            <a
              target="_blank"
              href="https://gamehub.vn/hub/lo-dien-top-10-game-thu-co-thu-nhap-cao-nhat-lang-esports.139781/"
            >
              <button>Tìm hiểu ngay</button>
            </a>
            <p>Những game thủ có mức lương cao nhất</p>
          </div>
        </div>
        <div class="wrapBody">
          <div class="inforOther">
            <div class="arrayInfor">
              <div class="itemInfor">
                <a
                  target="_blank"
                  href="https://toplist.vn/top-list/nam-ca-si-tre-noi-tieng-nhat-viet-nam-hien-nay-11774.htm"
                >
                  <div class="itemInfor_img1"></div>
                </a>
                <p class="tittleInfor1">Ca sĩ hót nhất 2023</p>
                <p class="contentInfor">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  voluptas possimus, error numquam accusantium sed rem
                  voluptates repudiandae suscipit
                </p>
                <p class="next">
                  <span>Read More</span>
                  <img style={{ marginLeft: "16px" }} src={infoNext} alt="" />
                </p>
              </div>
              <div class="itemInfor2">
                <a
                  href="https://vnexpress.net/audi-ra-mat-a8l-moi-gia-duoi-7-ty-dong-4485323.html"
                  target="_blank"
                >
                  <div class="itemInfor_img2"></div>
                </a>
                <p class="tittleInfor2">Audi ra ra mắt mẫu xe mới</p>
                <p class="contentInfor">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  voluptas possimus, error numquam accusantium sed rem
                  voluptates repudiandae suscipit
                </p>
                <p class="next">
                  <span>Read More</span>
                  <img style={{ marginLeft: "16px" }} src={infoNext} alt="" />
                </p>
              </div>
            </div>
            <div class="arrayInfor">
              <div
                style={{ position: "relative", marginTop: "-150px" }}
                class="itemInfor3"
              >
                <a
                  href="https://waveex.net/loi-ich-va-tac-hai-cua-viec-su-dung-dien-thoai-qua-nhieu/"
                  target="_blank"
                >
                  <div class="itemInfor_img3"></div>
                </a>
                <p class="tittleInfor3">Điện thoại có lợi hay hại</p>
                <p class="contentInfor">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  voluptas possimus, error numquam accusantium sed rem
                  voluptates repudiandae suscipit
                </p>
                <p class="next">
                  <span>Read More</span>
                  <img style={{ marginLeft: "16px" }} src={infoNext} alt="" />
                </p>
              </div>
              <div class="itemInfor4">
                <a
                  href="https://www.rolex.com/vi/watches.html?ef_id=CjwKCAiA-8SdBhBGEiwAWdgtcNjklPr89cQ4NhQ5iICqDTXNZ7jkKV_Dhnc9QkSaTjFJQA81jmdYjhoCYFIQAvD_BwE:G:s&s_kwcid=AL!141!3!616356773408!e!!g!!%C4%91%E1%BB%93ng%20h%E1%BB%93%20rolex"
                  target="_blank"
                >
                  <div class="itemInfor_img4"></div>
                </a>
                <p class="tittleInfor4">Đồng hồ rolex</p>
                <p class="contentInfor">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  voluptas possimus, error numquam accusantium sed rem
                  voluptates repudiandae suscipit Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Cum voluptas possimus, error
                  numquam accusantium sed rem voluptates repudiandae suscipit
                </p>
                <p class="next">
                  <span>Read More</span>
                  <img style={{ marginLeft: "16px" }} src={infoNext} alt="" />
                </p>
              </div>
            </div>
            <div class="arrayInfor">
              <div
                class="itemInfor5"
                style={{ position: "relative", marginTop: "-160px" }}
              >
                <a
                  href="https://noithatmanhhe.vn/sap-xep-phong-ngu-nho"
                  target="_blank"
                >
                  <div class="itemInfor_img5"></div>
                </a>
                <p class="tittleInfor5">Sắp xếp căn phòng siêu gọn gàng</p>
                <p class="contentInfor">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  voluptas possimus, error numquam accusantium sed rem
                  voluptates repudiandae suscipit
                </p>
                <p class="next">
                  <span>Read More</span>
                  <img style={{ marginLeft: "16px" }} src={infoNext} alt="" />
                </p>
              </div>
              <div
                class="itemInfor6"
                style={{ position: "relative", marginTop: "-50px" }}
              >
                <a
                  href="https://www.droidshop.vn/danh-muc/kinh-vr/"
                  target="_blank"
                >
                  <div class="itemInfor_img6"></div>
                </a>
                <p class="tittleInfor6">Kính thực tế ảo VR</p>
                <p class="contentInfor">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  voluptas possimus, error numquam accusantium sed rem
                  voluptates repudiandae suscipit
                </p>
                <p class="next">
                  <span>Read More</span>
                  <img style={{ marginLeft: "16px" }} src={infoNext} alt="" />
                </p>
              </div>
            </div>
          </div>
          <div class="advertising">
            <span>Du lịch giá rẻ</span>
            <a
              href="https://travel.com.vn/?utm_source=accesstrade&rk=FMphuO5zBXKNy6L05N1IoLY5UFi4Q6vkZMaaVqjjC844Kucr&atnct1=757b505cfd34c64c85ca5b5690ee5293&atnct2=FMphuO5zBXKNy6L05N1IoLY5UFi4Q6vkZMaaVqjjC844Kucr&atnct3=Yz2w50004fo00kuy4&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcIUzJ0h9TFcQcemSszmxCrQxNgq1f1TY6Y9KBVxmqYdHbTrp54n5xRoCjtIQAvD_BwE"
              target="_blank"
            >
              <button className="button_buy">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
