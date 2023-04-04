import React from "react";
import "./Travel.css";
import anh1 from "./img/anh1.png";
import anh2 from "./img/anh2.jpg";
import anh3 from "./img/anh3.png";
import anh4 from "./img/anh4.png";
import anh5 from "./img/anh5.jpg";
import anh6 from "./img/anh6.jpg";
import anh7 from "./img/anh7.jpg";
import anh8 from "./img/anh8.jpg";
import anh9 from "./img/anh9.jpg";
import anh10 from "./img/anh10.jpg";
import anh11 from "./img/anh11.jpg";
import anh12 from "./img/anh12.jpg";
import anh13 from "./img/anh13.jpg";
import anh14 from "./img/anh14.jpeg";
import anh15 from "./img/anh15.jpg";
import anh16 from "./img/anh16.jpg";
import anh17 from "./img/anh17.jpg";
import banner from "./img/ezgif.com-gif-maker.jpg";

const Travel = () => {
  return (
    <div className="travel">
      <p
        style={{
          color: "#222",
          fontSize: "30px",
          fontWeight: "500",
          marginBottom: "50px",
          marginTop: "50px",
        }}
        /*     style="
      color: #222;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 50px;
    " */
      >
        Đời sống
      </p>
      <div
        style={{
          display: "flex",
          gap: "2px",
        }}
        /* style="display: flex; gap: 2px" */
      >
        <div
          style={{ position: "relative" }}
          /* style="position: relative" */
        >
          <img
            src={anh1}
            alt=""
            style={{
              width: "524px",
              height: "440px",
            }}
            // style="width: 524px; height: 440px"
          />
          <div
            style={{
              osition: "absolute",
              bottom: "20px",
              color: "white",
              left: "20px",
              position: "absolute",
            }}
            /* style="position: absolute; bottom: 20px; color: white; left: 20px" */
          >
            <p
              style={{
                fontSize: " 14px",
                padding: "3px",
                border: "1px solid white",
                margin: "0",
                width: "56px",
              }}
              /*           style="
            font-size: 14px;
            padding: 3px;
            border: 1px solid white;
            margin: 0;
            width: 56px;
          " */
            >
              Nổi bật
            </p>
            <a
              href=""
              className="a"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                color: "white",
              }}
              /* style="text-decoration: none; font-weight: bold; font-size: 30px; margin: 10px 0 10px 0" */
            >
              Top những bản nhạc tiktok hay nhất thời điểm hiện tại
            </a>
            <p>
              <span
                style={{
                  color: "#ccc",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                /* style="color: #ccc; font-size: 12px; font-weight: bold" */
              >
                Quang Tùng
              </span>
              <span
                style={{
                  color: "#ccc",
                  fontSize: "12px",
                }}
                /* style="color: #ccc; font-size: 12px" */
              >
                {" "}
                - Nov 16
              </span>
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2px",
            }}
            /* style="display: flex; flex-wrap: wrap; gap: 2px" */
          >
            <div
              style={{
                position: "relative",
                height: "219px",
              }}
              /* style="position: relative; height: 219px" */
            >
              <img
                src={anh2}
                alt=""
                style={{
                  width: "261px",
                  height: "219px",
                }}
                /* style="width: 261px; height: 219px" */
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  color: "white",
                  left: "20px",
                  width: "200px",
                }}
                /* style="
              position: absolute;
              bottom: 20px;
              color: white;
              left: 20px;
              width: 200px;
            " */
              >
                <p
                  style={{
                    fontSize: "14px",
                    padding: "3px",
                    border: "1px solid white",
                    margin: "0",
                    width: "62px",
                  }}
                  /* style="
                font-size: 14px;
                padding: 3px;
                border: 1px solid white;
                margin: 0;
                width: 62px;
              " */
                >
                  Trò chơi
                </p>
                <a
                  className="a"
                  href=""
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    margin: "10px 0 10px 0",
                    color: "white",
                  }}
                  /* style="
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                margin: 10px 0 10px 0;
              " */
                >
                  Những trò chơi gây nghiện với giởi trẻ hiện tại là gì?
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                height: "219px",
              }}
              /* style="position: relative; height: 219px" */
            >
              <img
                src={anh3}
                alt=""
                style={{
                  width: "261px",
                  height: "219px",
                }}
                /* style="width: 261px; height: 219px" */
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  color: "white",
                  left: "20px",
                  width: "200px",
                }}
                /* style="
              position: absolute;
              bottom: 20px;
              color: white;
              left: 20px;
              width: 200px;
            " */
              >
                <p
                  style={{
                    fontSize: "14px",
                    padding: "3px",
                    border: "1px solid white",
                    margin: "0",
                    width: "64px",
                  }}
                  /* style="
                font-size: 14px;
                padding: 3px;
                border: 1px solid white;
                margin: 0;
                width: 64px;
              " */
                >
                  Âm nhạc
                </p>
                <a
                  className="a"
                  href=""
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    margin: "10px 0 10px 0",
                    color: "white",
                  }}
                  /* style="
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                margin: 10px 0 10px 0;
              " */
                >
                  Các bài hát được yêu thích nhất mọi thời đại
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                height: "219px",
              }}
              /* style="position: relative; height: 219px" */
            >
              <img
                src={anh4}
                alt=""
                style={{
                  width: "261px",
                  height: "219px",
                }}
                /* style="width: 261px; height: 219px" */
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  color: "white",
                  left: "20px",
                  width: "200px",
                }}
                /* style="
              position: absolute;
              bottom: 20px;
              color: white;
              left: 20px;
              width: 200px;
            " */
              >
                <p
                  style={{
                    fontSize: "14px",
                    padding: "3px",
                    border: "1px solid white",
                    margin: "0",
                    width: "43px",
                  }}
                  /* style="
                font-size: 14px;
                padding: 3px;
                border: 1px solid white;
                margin: 0;
                width: 43px;
              " */
                >
                  Phim
                </p>
                <a
                  className="a"
                  href=""
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    margin: "10px 0 10px 0",
                    color: "white",
                  }}
                  /* style="
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                margin: 10px 0 10px 0;
              " */
                >
                  Phim chiếu rạp phổ biến nhất thời điểm này?
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                height: "219px",
              }}
              /* style="position: relative; height: 219px" */
            >
              <img
                src={anh5}
                alt=""
                style={{
                  width: "261px",
                  height: "219px",
                }}
                /* style="width: 261px; height: 219px" */
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  color: "white",
                  left: "20px",
                  width: "200px",
                }}
                /* style="
              position: absolute;
              bottom: 20px;
              color: white;
              left: 20px;
              width: 200px;
            " */
              >
                <p
                  style={{
                    fontSize: "14px",
                    padding: "3px",
                    border: "1px solid white",
                    margin: "0",
                    width: "73px",
                  }}
                  /* style="
                font-size: 14px;
                padding: 3px;
                border: 1px solid white;
                margin: 0;
                width: 73px;
              " */
                >
                  Thời trang
                </p>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    margin: "10px 0 10px 0",
                    color: "white",
                  }}
                  /* style="
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                margin: 10px 0 10px 0;
              " */
                >
                  Cách ăn mặc hiện đại của các bạn thanh thiếu niên
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "50px",
          marginTop: "70px",
        }}
        /* style="display: flex; gap: 50px; margin-top: 70px" */
      >
        <div
          style={{
            width: "681px",
            display: "flex",
            flexWrap: " wrap",
            gap: "40px",
          }}
          /* style="width: 681px; display: flex; flex-wrap: wrap; gap: 40px" */
        >
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh6}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Liên minh huyền thoại tiếp tục gặp lỗi? Anh em game thủ cực khó
              chịu
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Tùng
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Feb 11
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh7}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Hàng loạt show diễn thời trang vào cuối năm 2022
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Duy
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Dec 03
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh8}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Mono phát biểu " Anh tôi làm được, tại sao tôi lại không? "
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Phát
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Oct 12
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh9}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Avartar 2 một bộ phim không thể bỏ lỡ trong năm nay
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Huy
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Mar 23
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh10}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Iphone 14 ra mắt khi nào? Dự đoán giá Iphone 14 và 14 Pro Max
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Tùng
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Sep 11
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh11}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Kinh nghiệm đi du lịch Tây Bắc vào mùa đông
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Phát
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Dec 15
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh12}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Liên quân: Chung sức nhận quà-Giành skin tới S+ hoàn toàn "Miễn
              phí"
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Duy
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Aug 18
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh13}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Những cuốn sách hay nhất mọi thời đại dành cho các bạn trẻ
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Huy
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Jan 06
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh14}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Hoa Hậu Thùy Tiên, Quang Linh Vlog làm thiện nguyện trao tặng
              giếng ở Angola
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Phát
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Jan 14
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh15}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Lịch nghỉ tết Nguyên đán Quý Mão 2023 bao nhiêu ngày?
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Tùng
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Oct 28
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh16}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Các mẫu Laptop Core i9 bắt đầu ra mắt
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Huy
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Jul 13
              </span>
            </p>
          </div>
          <div
            style={{ width: "320px" }}
            /* style="width: 320px" */
          >
            <img
              src={anh17}
              style={{
                width: "320px",
                height: "180px",
              }}
              /* style="width: 320px; height: 180px" */
              alt=""
            />
            <a class="text1" href="">
              Nhan sắc dịu dàng của Á hậu Phương Nhi gây ngất ngây cộng đồng
              mạng
            </a>
            <p
              style={{ margin: "5px 0 0 0" }}
              /* style="margin: 5px 0 0 0" */
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontWeight: "bold",
                }}
                /* style="font-size: 12px; color: #666; font-weight: bold" */
              >
                by Duy
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                }}
                /* style="font-size: 12px; color: #888" */
              >
                {" "}
                - Aug 12
              </span>
            </p>
          </div>
        </div>

        <div
          style={{ width: "320px" }}
          /* style="width: 320px" */
        >
          <div
            style={{
              width: "319px",
              height: "236px",
              backgroundColor: "#17b978",
              color: "white",
              padding: "35px",
              boxSizing: "borderBox",
              marginBottom: "50px",
            }}
            /* style="
          width: 319px;
          height: 236px;
          background-color: #17b978;
          color: white;
          padding: 35px;
          box-sizing: border-box;
          margin-bottom: 50px;
        " */
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: "24px",
              }}
              /* style="font-weight: 500; font-size: 24px" */
            >
              Đặt mua
            </p>
            <p
              style={{
                fontSize: "14px",
                margin: "23px 0 23px 0",
              }}
              /* style="font-size: 14px; margin: 23px 0 23px 0" */
            >
              Nhận tất cả nội dung mới nhất được gửi đến email của bạn vài lần
              một tháng.
            </p>
            <input
              type="text"
              placeholder="E-mail"
              style={{
                height: "60px",
                width: "100%",
                border: "none",
                outline: "none",
                padding: "15px",
              }}
              /* style="
            height: 60px;
            width: 100%;
            border: none;
            outline: none;
            padding: 15px;
          " */
            />
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#333",
              border: "1px solid #666",
              padding: "16px 0 16px 20px",
              borderLeft: "5px solid #333",
              fontWeight: "500",
            }}
            /* style="
          font-size: 18px;
          color: #333;
          border: 1px solid #666;
          padding: 16px 0 16px 20px;
          border-left: 5px solid #333;
          font-weight: 500;
        " */
          >
            Phổ biến nhất
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "36px",
            }}
            /* style="display: flex; gap: 20px; margin-top: 36px" */
          >
            <p
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#999",
                borderRadius: "3px",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
              }}
              /* style="
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #999;
            border-radius: 3px;
            color: white;
            font-size: 16px;
            font-weight: 500;
          " */
            >
              1
            </p>
            <a href="" class="text2">
              Messi cùng Argentina dành chức vô địch World cup lịch sử
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "36px",
            }}
            /* style="display: flex; gap: 20px; margin-top: 36px" */
          >
            <p
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#999",
                borderRadius: "3px",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
              }}
              /* style="
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #999;
            border-radius: 3px;
            color: white;
            font-size: 16px;
            font-weight: 500;
          " */
            >
              2
            </p>
            <a href="" class="text2">
              Các cậu thủ Việt Nam giao hữu chuẩn bị cho AFF cup 2022
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "36px",
            }}
            /* style="display: flex; gap: 20px; margin-top: 36px" */
          >
            <p
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#999",
                borderRadius: "3px",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
              }}
              /* style="
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #999;
            border-radius: 3px;
            color: white;
            font-size: 16px;
            font-weight: 500;
          " */
            >
              3
            </p>
            <a href="" class="text2">
              Độ Mixi tiếp tục chương trình từ thiện hàng năm vào tháng 12
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "36px",
            }}
            /* style="display: flex; gap: 20px; margin-top: 36px" */
          >
            <p
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#999",
                borderRadius: "3px",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
              }}
              /* style="
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #999;
            border-radius: 3px;
            color: white;
            font-size: 16px;
            font-weight: 500;
          " */
            >
              4
            </p>
            <a href="" class="text2">
              Danh sách các chương trình hay vào cuối năm của vtv 2023
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "36px",
            }}
            /* style="display: flex; gap: 20px; margin-top: 36px" */
          >
            <p
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#999",
                borderRadius: "3px",
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
              }}
              /* style="
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #999;
            border-radius: 3px;
            color: white;
            font-size: 16px;
            font-weight: 500;
          " */
            >
              5
            </p>
            <a href="" class="text2">
              Thương lái đổ về chợ cây cảnh lớn nhất trước Tết Nguyên Đán
            </a>
          </div>
          <img
            src={banner}
            alt=""
            style={{
              marginTop: "45px",
              paddingLeft: "5px",
            }}
            /* style="margin-top: 45px; padding-left: 5px" */
          />

          <p
            style={{
              fontSize: "18px",
              color: "#333",
              border: "1px solid #666",
              padding: "16px 0 16px 20px",
              borderLeft: "5px solid #333",
              fontWeight: "500",
              marginTop: "50px",
            }}
            /* style="
          font-size: 18px;
          color: #333;
          border: 1px solid #666;
          padding: 16px 0 16px 20px;
          border-left: 5px solid #333;
          font-weight: 500;
          margin-top: 50px;
        " */
          >
            Thẻ
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
            /* style="margin-top: 30px; display: flex; flex-wrap: wrap; gap: 10px" */
          >
            <a href="" class="text3">
              Tin tức mới
            </a>
            <a href="" class="text3">
              Thời trang
            </a>
            <a href="" class="text3">
              Blog
            </a>
            <a href="" class="text3">
              Phong cách đường phố
            </a>
            <a href="" class="text3">
              Đồ thủ công
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
        /* style="display: flex; gap:16px;" */
      >
        <p
          style={{
            width: "30px",
            height: "30px",
            color: "white",
            backgroundColor: "#17b978",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
          /* style="width: 30px; height: 30px; color: white; background-color: #17b978; border-radius: 50px; display: flex; justify-content: center; align-items: center; margin-top: 50px;" */
        >
          1
        </p>
        <p
          style={{
            width: "30px",
            height: "30px",
            color: "#808080",
            border: "1px solid #808080",
            backgroundColor: "white",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
          /* style="width: 30px; height: 30px; color: #808080; border:1px solid #808080; background-color: white; border-radius: 50px; display: flex; justify-content: center; align-items: center; margin-top: 50px;" */
        >
          2
        </p>
      </div>
    </div>
  );
};

export default Travel;
