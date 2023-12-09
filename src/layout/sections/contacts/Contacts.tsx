import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_tbgdr3o", "template_pm4io4l", form.current, "sQd8m36x-oGQoIr-2").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"Name"} name={"user_name"} />
          <S.Field required placeholder={"Email"} name={"email"} />
          <S.Field required placeholder={"Subject"} name={"subject"} />
          <S.Field required as={"textarea"} placeholder={"Message"} name={"message"} />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
