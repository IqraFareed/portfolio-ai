import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
import { sendEmail } from "@/actions/sendEmail";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New messsage from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You receieved the following message
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Senders email is :{senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
