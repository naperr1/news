import React from "react";
import "./Blog.css";
import a1 from "./images/1.jpg";
import a2 from "./images/2.jpg";
import a3 from "./images/3.jpg";
import a4 from "./images/4.jpg";
import a5 from "./images/5.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <div class="container1">
        <header>
          <h1 class="heading-1">CA SĨ NỔI TIẾNG NHẤT SRI LANKA</h1>
          <div class="sub-heading">
            <p>
              Hanoi <span>November, 9,2017</span>
            </p>
            <p class="importent">ZANIEL</p>
          </div>
        </header>

        <div class="main1">
          <div class="home">
            <div class="left">
              <img src={a5} class="home-img" alt="Paper photo" />

              <h2 class="heading-2">
                Sinh nhật của chàng ca sĩ nổi tiếng xứ Sri Lanka
              </h2>
            </div>

            <div class="right">
              <h3 class="heading-3">Các blog khác </h3>
              <div class="lists">
                <div class="list">
                  <img src={a1} alt="photo 1" />
                  <p className="list_p">
                    Các rạp đang chiếu Avatar 2 hãy đi xem ngay hôm nay
                  </p>
                </div>

                <div class="list">
                  <img src={a4} alt="photo 2" />
                  <p className="list_p">
                    Sân bay Nhật Bản đột ngột mất điện khiến hơn 1000...
                  </p>
                </div>

                <div class="list">
                  <img src={a3} alt="photo 3" />
                  <p className="list_p">
                    Lễ hội "Hoa anh đào" chính thức mở của tại TP.HCM
                  </p>
                </div>

                <div class="list">
                  <img src={a2} alt="photo 4" />
                  <p className="list_p">
                    Nguy cơ giảm tuổi thọ nếu làm một trong những điều...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <blogcontent>
            <p> </p>
            <p>
              {" "}
              Sandaru Sathsara là một ca sĩ Sri Lanka nổi lên từ việc cover các
              bài hát nổi tiếng trên thế giới và đăng những video của mình lên
              kênh Youtube.{" "}
            </p>

            <p>
              Những ca khúc nổi tiếng mà anh chàng này cover có thể kể như là:
              Believer, Its my life và Love me like you do,... Tất cả các bài
              hát đều được chuyển thể thành giai điệu buồn cười và hóm hỉnh với
              chất giọng Sri Lanka đặc trưng. Video nhiều view nhất của anh
              chàng này là bài hát nổi tiếng "Its my life" của Bon Jovi với hơn
              40 triệu view.
            </p>
            <p>
              Không có nhiều thông tin riêng tư về anh chàng Sandaru này nhưng
              trang cá nhân của anh ghi rằng anh đang sống tại Australia.
              Sandaru bắt đầu kênh Youtube của mình từ ngày 23 tháng 10 năm 2020
              và khởi đầu bằng các video cover ngắn nhạc Sri Lanka và Ấn Độ, sau
              đó chuyển dần sang cover các bài hát tiếng Anh nổi tiếng, nhờ đó
              mà lượng view của anh lên đến hàng triệu và vẫn tiếp tục tăng đến
              tận bây giờ. Tới đây sẽ là sinh nhật lần thứ 28 của Sandaru và
              chúng tôi chúc anh sẽ luôn thành công trong sự nghiệp Youtube của
              mình.{" "}
            </p>
          </blogcontent>
        </div>
      </div>

      <blockquote>Sri Lanka | Sandaru Sathsara</blockquote>

      <a
        class="button fbbutton"
        href="https://www.facebook.com/duythainguyen276"
      >
        Facebook
      </a>

      <a class="button ytbutton" href="https://www.youtube.com/@chillysoda4915">
        Youtube
      </a>

      <a
        class="button twitbutton"
        href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
      >
        Twitter
      </a>

      <div class="comment-box">
        <h2>Comment</h2>
        <form action="#">
          <input type="text" name="full_name" placeholder="Full Name....." />
          <input type="email" name="email" placeholder="Email Address....." />
          <textarea
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="="
            Type
            Your
            Comment
          ></textarea>
          <span type="submit">Submit Comment</span>
        </form>
      </div>
    </div>
  );
};

export default Blog;
