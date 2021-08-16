// 선택한 1개의 승마장을 자세히 보여주는 페이지
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const DetailPage = (): JSX.Element => {
  // useEffect(() => {}, []);
  const router = useRouter();
  const oldPassword = router.query;
  const [password, setPassword] = useState(oldPassword.password);

  useEffect(() => {
    setPassword(router.query.password);
    // console.log(password);
  }, [router]);
  return (
    <>
      <main>
        <p>{JSON.stringify(password)}</p>
        <p>
          https://nextjs.org/docs/routing/introduction#linking-to-dynamic-paths
        </p>
      </main>
    </>
  );
};

export default DetailPage;
