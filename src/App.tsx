import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";
import styled from "styled-components";
import { GlobalStyles } from "./components/styles/global-style/global-style";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/pages/loading-screen/loading-screen";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default function App() {
  //페이지 로딩 여부
  const [isLoading, setIsLoading] = useState(true);

  //페이지 로딩 여부 체크
  const init = async () => {
    setIsLoading(false);
  };

  //페이지 렌더링시 loading 여부 판단
  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}
