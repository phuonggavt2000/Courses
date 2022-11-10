const courses = [
  {
    id: 7,
    title: "Kiến Thức Nhập Môn IT",
    slug: "lessons-for-newbie",
    description:
      "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
    image: "courses/7.png",
    icon: "courses/7/6200b81f52d83.png",
    video_type: "youtube",
    video: "M62l1xA5Eu8",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 79783,
    is_pro: false,
    is_coming_soon: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: true,
    user_progress: 0,
    last_completed_at: null,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png",
    video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8",
    landing_page_url: "/courses/lessons-for-newbie",
    is_pre_order: false,
    is_published: true,
  },
  {
    id: 2,
    title: "HTML CSS từ Zero đến Hero",
    slug: "html-css",
    description:
      "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
    image: "courses/2.png",
    icon: "courses/2/6200aecea81de.png",
    video_type: "youtube",
    video: "R6plN3FvzFY",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 123623,
    is_pro: false,
    is_coming_soon: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: true,
    user_progress: 100,
    last_completed_at: "2022-06-11 10:15:41",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png",
    video_url: "https://www.youtube.com/watch?v=R6plN3FvzFY",
    landing_page_url: "/courses/html-css",
    is_pre_order: false,
    is_published: true,
  },
  {
    id: 3,
    title: "Responsive Với Grid System",
    slug: "responsive-web-design",
    description:
      "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
    image: "courses/3.png",
    icon: "courses/3/6200afe1240bb.png",
    video_type: "youtube",
    video: "uz5LIP85J5Y",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 28189,
    is_pro: false,
    is_coming_soon: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: true,
    user_progress: 86,
    last_completed_at: "2022-07-05 13:55:01",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png",
    video_url: "https://www.youtube.com/watch?v=uz5LIP85J5Y",
    landing_page_url: "/courses/responsive-web-design",
    is_pre_order: false,
    is_published: true,
  },
  {
    id: 1,
    title: "Lập Trình JavaScript Cơ Bản",
    slug: "javascript-co-ban",
    description:
      "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
    image: "courses/1.png",
    icon: "courses/1/6200ad9d8a2d8.png",
    video_type: "youtube",
    video: "0SJE9dYdpps",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 79403,
    is_pro: false,
    is_coming_soon: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: true,
    user_progress: 72,
    last_completed_at: "2022-07-14 03:02:04",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png",
    video_url: "https://www.youtube.com/watch?v=0SJE9dYdpps",
    landing_page_url: "/courses/javascript-co-ban",
    is_pre_order: false,
    is_published: true,
  },
];

function List({ data, children }) {
  console.log(children);
  return <ul>{data.map((car) => children(car))}</ul>;
}

function App() {
  const cars = ["BMW", "Honda", "MES"];
  return (
    <div className="app">
      <List data={cars}>{(item) => <li>{item}</li>}</List>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
