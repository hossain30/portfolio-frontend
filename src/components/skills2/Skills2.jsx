import "./Skills2.css";
import "aos/dist/aos.css"; // Import AOS CSS
import aos from "aos";
import { useEffect } from "react";

const Skills2 = () => {
  useEffect(() => {
    aos.init({ duration: 1500, offset: 50 });
  }, []);
  const skills = [
    { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Bootstrap",
      icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    },
    {
      name: "Tailwind",
      icon: "https://d6f6d0kpz0gyr.cloudfront.net/uploads/images/_1200x630_crop_center-center_82_none/tailwind-thumb.jpg?mtime=20210104144959&focal=none&tmtime=20210104145035",
    },
    {
      name: "Redux",
      icon: "https://css-tricks.com/wp-content/uploads/2019/10/redux-logo.png",
    },
    {
      name: "DOM",
      icon: "https://i.ytimg.com/vi/SCYUzGJ0EmY/maxresdefault.jpg",
    },

    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Express",
      icon: "https://img.icons8.com/color/48/000000/express.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "Mongoose",
      icon: "https://img.icons8.com/color/48/000000/mongoose.png",
    },
    {
      name: "git/Github",
      icon: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png",
    },
    {
      name: "JWT",
      icon: "https://1.bp.blogspot.com/-9jhEkn_uApY/Xxx35kNQB1I/AAAAAAAAMKk/8Jrv75ClwUoh8bkUncTzOJIyH2rU6RkjQCLcBGAsYHQ/s1280/jwt.png",
    },
    {
      name: "JSON",
      icon: "https://cdn4.iconfinder.com/data/icons/smashicons-file-types-flat/56/25_-_JSON_File_Flat-1024.png",
    },

    {
      name: "Nodemailer",
      icon: "https://global-uploads.webflow.com/5ebea55066f36f531dec5b32/62bf68f37b012285a9f7ac59_83326223-3491-4a4b-8c35-72a786e597d5.png",
    },
    {
      name: "Passport js",
      icon: "https://v6.tsed.dev/passportjs.png",
    },

    {
      name: "bcrypt.js",
      icon: "https://stackjava.com/wp-content/uploads/2018/03/bcrypt-logo.jpg",
    },
    {
      name: "CORS",
      icon: "https://solutiontechie.com/wp-content/uploads/2023/11/CORS.webp",
    },
    { name: "Axios", icon: "https://assets.axios.com/axios_logo_og.png" },
    {
      name: "Typed.js",
      icon: "https://cdn-cdpl.sgp1.cdn.digitaloceanspaces.com/source/2dd7d3ba70bcbe34f8b0d7242c773a78/LOGO1.png",
    },
    {
      name: "Swiper",
      icon: "https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-07-swiper-js/social.png",
    },
    {
      name: "AOS",
      icon: "https://www.drupal.org/files/project-images/Drupal-AOSJS-Animate-On-Scroll-Javascript-Library.png",
    },
  ];

  return (
    <div className="skills2_section">
      <h1>More About My Skills</h1>
      <div className="skills2_container">
        {skills.map((icons, index) => {
          return (
            <div
              data-aos={index % 2 === 0 ? "flip-up" : "flip-down"}
              key={index}
              className="box"
            >
              <div className="pic">
                <img src={icons.icon} alt={icons.name} />
              </div>
              <div className="pic_name">{icons.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills2;
