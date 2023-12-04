import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const socialItemData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkedin",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Daniil</S.Name>
        <S.SocialList>
          {socialItemData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId} />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
          {/* <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"} />
            </SocialLink>
          </SocialItem> */}
        </S.SocialList>
        <S.Copyright>© 2023 Daniil Minin, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
