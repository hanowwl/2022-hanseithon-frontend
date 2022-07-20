import React from "react";

import SponsorAegisPNG from "src/assets/png/hanseithon-sponsor1.png";
import SponsorUnityPNG from "src/assets/png/hanseithon-sponsor2.png";
import SponsorJpubPNG from "src/assets/png/hanseithon-sponsor3.png";
import SponsorInflearnPNG from "src/assets/png/hanseithon-sponsor4.png";
import SponsorHanbitMediaPNG from "src/assets/png/hanseithon-sponsor5.png";

import * as S from "./styled";

export const Footer: React.FC = () => (
  <S.FooterContainer>
    <S.FooterSplitLine />
    <S.FooterContentContainer>
      <S.FooterWrapper>
        <S.FooterSchoolTitle
          href="https://hansei.sen.hs.kr/"
          target="_blank"
          rel="noreferrer"
        >
          한세사이버보안고등학교
        </S.FooterSchoolTitle>
        <hr style={{ marginTop: "2rem" }} />
        <S.FooterDescription>
          한세사이버보안고등학교 | 개발 :{" "}
          <S.FooterDeveloperGithub
            href="https://github.com/cmg8431"
            target="_blank"
            rel="noreferrer"
          >
            최민기,
          </S.FooterDeveloperGithub>{" "}
          <S.FooterDeveloperGithub
            href="https://github.com/ISTPdeveloper"
            target="_blank"
            rel="noreferrer"
          >
            김대욱,
          </S.FooterDeveloperGithub>{" "}
          <S.FooterDeveloperGithub
            href="https://github.com/HanSeo0507"
            target="_blank"
            rel="noreferrer"
          >
            이한수,
          </S.FooterDeveloperGithub>{" "}
          <S.FooterDeveloperGithub
            href="https://github.com/Comet105"
            target="_blank"
            rel="noreferrer"
          >
            유태견 |&nbsp;
          </S.FooterDeveloperGithub>
          운영 : 전효림, 권민서, 김도훈, 김재완, 선민우, 윤소영, 양승철, 정요찬,
          이은혁, 이채원, 김준석 <br /> <br />
          총괄: 박현경 | 주소 : 서울특별시 마포구 공덕동 122-37
        </S.FooterDescription>
        <S.FooterSponsorWrapper>
          <S.FooterSponsorAegis src={SponsorAegisPNG} />
          <S.FooterSponsorHanbitMedia src={SponsorHanbitMediaPNG} />
          <S.FooterSponsorJpub src={SponsorJpubPNG} />
          <S.FooterSponsorInflearn src={SponsorInflearnPNG} />
          <S.FooterUnityButton
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a5f9427a-d6f6-4e61-8f5e-ea5fd484048c/Unity_Edu_License_%EC%8B%A0%EC%B2%AD_%EB%B0%8F_Unity_%EC%84%A4%EC%B9%98%EA%B0%80%EC%9D%B4%EB%93%9C.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220720T064319Z&X-Amz-Expires=86400&X-Amz-Signature=f8dee57cb8e5ab8c5312d48d683c09f6d63c3477d392115b254b2bd395c82c23&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Unity%2520Edu%2520License%2520%25EC%258B%25A0%25EC%25B2%25AD%2520%25EB%25B0%258F%2520Unity%2520%25EC%2584%25A4%25EC%25B9%2598%25EA%25B0%2580%25EC%259D%25B4%25EB%2593%259C.pdf%22&x-id=GetObject"
            target="_blank"
            rel="noreferrer"
          >
            <S.FooterSponsorUnity src={SponsorUnityPNG} />
          </S.FooterUnityButton>
        </S.FooterSponsorWrapper>

        <S.FooterCopyright>
          Copyright © 2022 Hansei Cyber Security High School. ALL rights
          reserved.
        </S.FooterCopyright>
      </S.FooterWrapper>
    </S.FooterContentContainer>
  </S.FooterContainer>
);
