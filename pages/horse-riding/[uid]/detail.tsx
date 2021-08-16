// 선택한 1개의 승마장을 자세히 보여주는 페이지
import asyncComponent from "@/components/_Common/asyncComponent";

const DetailContainer = asyncComponent(
  () =>
    import(
      "@/controllers/HorseRidingController/DetailController/Detail.Container"
    ),
);

const DetailPage = (): JSX.Element => {
  return (
    <>
      <DetailContainer />
    </>
  );
};

export default DetailPage;
