import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 transition">
      <Container className="max-w-2xl">
        <h2 className="text-center fw-bold mb-4 text-dark dark:text-white">
          {t("header.contact")}
        </h2>
        <Form>
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input id="name" type="text" className="dark:bg-gray-800 dark:text-white" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="email" className="dark:bg-gray-800 dark:text-white" />
          </FormGroup>
          <FormGroup>
            <Label for="message">Mensagem</Label>
            <Input id="message" type="textarea" rows="4" className="dark:bg-gray-800 dark:text-white" />
          </FormGroup>
          <div className="text-center mt-4">
            <Button color="primary" size="lg">{t("contact.send") ?? "Enviar"}</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}