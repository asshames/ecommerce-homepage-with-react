import React from "react";
import Layout from "./components/Layout/Layout";
import MyShop from "./containers/MyShop/MyShop"

const App = () => {
  return (
    <div>
      <Layout>
        <MyShop/>
      </Layout>
    </div>
  );
};

export default App;
