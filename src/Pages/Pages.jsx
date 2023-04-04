import React, { useEffect } from "react";
import "./Page.css";
import HoGuom from "../Pages/imgNew/HoGuom.jpg";
import covid from "../Pages/imgNew/covid.jpg";
import Dat from "../Pages/imgNew/Dat.jpg";
import kich from "../Pages/imgNew/kich.jpg";
import le_chao_co from "../Pages/imgNew/le_chao_co.jpg";
import QuangHai from "../Pages/imgNew/QuangHai.jpg";
import tieu from "../Pages/imgNew/tieu.jpg";
import VietNam from "../Pages/imgNew/VietNam.jpg";
import vtv from "../Pages/imgNew/vtv.png";
import Xang_dau from "../Pages/imgNew/Xang_dau.jpg";

const Pages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="S_new">
        <div class="wrapNew">
          <h1 style={{ marginBottom: "30px" }}>Tin mới</h1>

          <a
            target="_blank"
            href="https://baomoi.com/pho-di-bo-ho-guom-nhon-nhip-trong-ngay-dau-nam-moi/c/44708788.epi"
            class="itemNew"
          >
            <img src={HoGuom} alt="" />
            <div class="itemNew_content">
              <h2 class="itemNew_content_tittle">
                Phố đi bộ hồ gươm trong ngày đầu năm mới
              </h2>
              <img src={vtv} alt="" class="logo" />
              <span>10 phút </span>
              <span>7 liên quan</span>
            </div>
          </a>
          <a
            target="_blank"
            href="https://baomoi.com/khoi-dong-thi-cong-tinh-lo-342-rut-ngan-50km-hanh-trinh-ha-long-lang-son/c/44708848.epi"
          >
            <div class="itemNew">
              <img src={Dat} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Khởi động thi công Tỉnh lộ 342 rút ngắn 50km hành trình Hạ
                  Long - Lạng Sơn
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.baogiaothong.vn/nhieu-hoat-dong-van-hoa-tay-bac-trong-dip-nghi-tet-duong-lich-d577961.html"
          >
            <div class="itemNew">
              <img src={VietNam} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Nhiều hoạt động văn hóa Tây Bắc trong dịp nghỉ Tết Dương lịch
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://baomoi.com/dieu-chinh-thue-moi-truong-gia-xang-dau-dong-loat-tang-tu-0h-ngay-1-1/c/44703754.epi"
          >
            <div class="itemNew">
              <img src={Xang_dau} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Giá xăng dầu đồng loạt tăng từ 1/1/2023
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://vnexpress.net/covid-19/covid-19-viet-nam"
          >
            <div class="itemNew">
              <img src={covid} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Việt Nam ghi nhận 53 ca mắc Covid-19 trong ngày đầu năm 2023
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.peppervietnam.com/">
            <div class="itemNew">
              <img src={tieu} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Giá tiêu hôm nay 2/1: Ổn định trong mức 57.500 - 60.000
                  đồng/kg
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://baomoi.com/pho-di-bo-ho-guom-nhon-nhip-trong-ngay-dau-nam-moi/c/44708788.epi"
            class="itemNew"
          >
            <img src={HoGuom} alt="" />
            <div class="itemNew_content">
              <h2 class="itemNew_content_tittle">
                Phố đi bộ hồ gươm trong ngày đầu năm mới
              </h2>
              <img src={vtv} alt="" class="logo" />
              <span>10 phút </span>
              <span>7 liên quan</span>
            </div>
          </a>
          <a
            target="_blank"
            href="https://baomoi.com/dieu-chinh-thue-moi-truong-gia-xang-dau-dong-loat-tang-tu-0h-ngay-1-1/c/44703754.epi"
          >
            <div class="itemNew">
              <img src={Xang_dau} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Giá xăng dầu đồng loạt tăng từ 1/1/2023
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.baogiaothong.vn/nhieu-hoat-dong-van-hoa-tay-bac-trong-dip-nghi-tet-duong-lich-d577961.html"
          >
            <div class="itemNew">
              <img src={VietNam} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Nhiều hoạt động văn hóa Tây Bắc trong dịp nghỉ Tết Dương lịch
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://vnexpress.net/covid-19/covid-19-viet-nam"
          >
            <div class="itemNew">
              <img src={covid} alt="" />
              <div class="itemNew_content">
                <h2 class="itemNew_content_tittle">
                  Việt Nam ghi nhận 53 ca mắc Covid-19 trong ngày đầu năm 2023
                </h2>
                <img src={vtv} alt="" class="logo" />
                <span>10 phút </span>
                <span>7 liên quan</span>
              </div>
            </div>
          </a>
        </div>
        <div class="advertisings">
          <h1 style={{ marginBottom: "30px" }}>Tin hot</h1>
          <a
            target="_blank"
            href="https://baomoi.com/luong-xuan-truong-gia-nhap-hai-phong-fc/c/44709411.epi"
          >
            <div class="advertising_item">
              <img class="imgAdvertising" src={QuangHai} alt="" />
              <p class="advertising_item_tittle">
                Tuyển Việt Nam nguy cơ tổn thất lực lượng trước trận đấu Myanmar
              </p>
              <div class="inforMore">
                <div class="inforMore_item">
                  <img src={vtv} alt="" />
                </div>
                <div class="inforMore_item">12 phút</div>
                <div class="inforMore_item">87 liên quan</div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://baomoi.com/xuc-dong-le-chao-co-dac-biet-noi-cuc-dong-tren-dat-lien/c/44709365.epi"
          >
            <div class="advertising_item">
              <img class="imgAdvertising" src={le_chao_co} alt="" />
              <p class="advertising_item_tittle">
                Lễ chào cờ đầu năm 2023 tại cực Đông trên đất liền của Tổ quốc
              </p>
              <div class="inforMore">
                <div class="inforMore_item">
                  <img src={vtv} alt="" />
                </div>
                <div class="inforMore_item">12 phút</div>
                <div class="inforMore_item">87 liên quan</div>
              </div>
            </div>
          </a>
          <a href="https://nld.com.vn/nghe-si-viet-nam.html" target="_blank">
            <div class="advertising_item">
              <img class="imgAdvertising" src={kich} alt="" />
              <p class="advertising_item_tittle">
                Sân khấu kịch với công nghiệp văn hóa
              </p>
              <div class="inforMore">
                <div class="inforMore_item">
                  <img src={vtv} alt="" />
                </div>
                <div class="inforMore_item">12 phút</div>
                <div class="inforMore_item">87 liên quan</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pages;
