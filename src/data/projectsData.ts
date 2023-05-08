import { projectsType } from "../types/types";
import advanceimg from "../img/advanceimg.png";
import tuvideoimg from "../img/tuvideoimg.png";
import udemyimg from "../img/udemyimg.png";

export const projects: projectsType = [
  {
    id: "3",
    link: "https://advance-liart.vercel.app/home",
    title: "Advance",
    img: advanceimg,
    description: "social media platform for uploading photos and videos.",
    role: "full stack developer",
    startDate: "2022 / 12 / 02",
    endDate: "2022 / 12 / 02",
    tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
  },
  {
    id: "2",
    link: "https://mir-topv24-udemy-frontend.vercel.app/",
    title: "Udemy(clone)",
    img: udemyimg,
    description: "social media",
    role: "full stack developer , Back end Architect",
    startDate: "2022 / 12 / 02",
    endDate: "2022 / 12 / 02",
    tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
  },
  {
    id: "1",
    link: "https://tuvideo-frontend-ten.vercel.app/",
    title: "TuVideo",
    img: tuvideoimg,
    description:
      "Video platform for uploading video, following channels, comment and like videos!",
    role: "Full Stack Developer",
    startDate: "2022 / 12 / 02",
    endDate: "2022 / 12 / 02",
    tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
  },
];
