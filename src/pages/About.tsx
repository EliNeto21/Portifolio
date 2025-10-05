import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-light dark:bg-gray-800 transition">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark dark:text-white">{t("about.title")}</h2>
        <Row className="justify-content-center">
          <Col md="8" className="text-center">
            <p className="text-muted dark:text-gray-300">{t("about.description")}</p>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
                <span className="badge bg-primary bg-opacity-25 text-dark dark:bg-blue-800 dark:text-white px-3 py-2">⚡ React</span>
              </a>
              <a href="https://nodejs.org/pt/about" target="_blank" rel="noopener noreferrer">
                <span className="badge bg-primary bg-opacity-25 text-dark dark:bg-blue-800 dark:text-white px-3 py-2">🛠 Node.js</span>
              </a>
              <a href="https://dotnet.microsoft.com/pt-br" target="_blank" rel="noopener noreferrer">
                <span className="badge bg-primary bg-opacity-25 text-dark dark:bg-blue-800 dark:text-white px-3 py-2">🎯 .NET</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}