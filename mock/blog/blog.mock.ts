import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock([
  {
    url: "/api/test",
    body: {
      code: 200,
      message: "success",
      data: {
        name: "vben",
        age: 18
      }
    }
  },
  {
    // 獲取部落格列表
    url: "/api/blog-list",
    method: "GET",
    body: {
      code: 200,
      message: "success",
      data: {
        total: 100,
        list: [
          {
            id: 1,
            title: "title1",
            content: "content1"
          },
          {
            id: 2,
            title: "title2",
            content: "content2"
          }
        ]
      }
    }
  }
]);
