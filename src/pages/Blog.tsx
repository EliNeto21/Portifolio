import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import { CardArticle } from "../components/cardArticle";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="bg-light dark:bg-gray-800 transition">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark dark:text-white">{t("header.blog")}</h2>
        <Row>
          <Col md="4" className="mb-4">
            <CardArticle 
              name="Artigo 1"
              description="Artigo n sei oq n sei oq la"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}