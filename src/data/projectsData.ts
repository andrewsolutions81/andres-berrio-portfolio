import { projectsType, projectType } from "../types/types";

// export const projects: projectsType = [
//   {
//     id: "id1",
//     link: "hey I am a link",
//     title: "Advance",
//     img: "i shoud bring an image",
//     desciption: "social media",
//     role: "full stack developer",
//     startDate: "2022 / 12 / 02",
//     endDate: "2022 / 12 / 02",
//     tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
//   },
//   {
//     id: "id2",
//     link: "hey I am a link",
//     title: "Advance",
//     img: "i shoud bring an image",
//     desciption: "social media",
//     role: "full stack developer",
//     startDate: "2022 / 12 / 02",
//     endDate: "2022 / 12 / 02",
//     tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
//   },
//   {
//     id: "id3",
//     link: "hey I am a link",
//     title: "Advance",
//     img: "i shoud bring an image",
//     desciption: "social media",
//     role: "full stack developer",
//     startDate: "2022 / 12 / 02",
//     endDate: "2022 / 12 / 02",
//     tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
//   },
// ];

function fakeFetch(): Promise<projectsType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projects: projectsType[] = [
        [
          {
            id: "id1",
            link: "hey I am a link",
            title: "Advance",
            img: "i shoud bring an image",
            desciption: "social media",
            role: "full stack developer",
            startDate: "2022 / 12 / 02",
            endDate: "2022 / 12 / 02",
            tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
          },
          {
            id: "id2",
            link: "hey I am a link",
            title: "Advance",
            img: "i shoud bring an image",
            desciption: "social media",
            role: "full stack developer",
            startDate: "2022 / 12 / 02",
            endDate: "2022 / 12 / 02",
            tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
          },
          {
            id: "id3",
            link: "hey I am a link",
            title: "Advance",
            img: "i shoud bring an image",
            desciption: "social media",
            role: "full stack developer",
            startDate: "2022 / 12 / 02",
            endDate: "2022 / 12 / 02",
            tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
          },
        ]
      ];
      resolve(projects);
    }, 1000); // 1 second delay
  });
}

export const fetchProjects = async ()=> {
  const projects = await fakeFetch();
  console.log(projects)
  return projects
}
