export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    { path: "/", component: "./index" }, // 路径相对于pages
    { path: "/goods", component: "./goods" }, 
    {
      path: "/about",
      component: "./about",
      Routes: ["./routes/PrivateRoute.js"] // 相对于根目录，后缀名不能省
    }, // 路径守卫
    {
      path: "/users",
      component: "./users/_layout",
      routes: [
        { path: "/users/", component: "./users/index" },
        { path: "/users/:id", component: "./users/$id" }
      ]
    },
    { path: "/login", component: "./login" },
    { component: "./notfound" }
  ]
};
