import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { CardProjeto } from "../components/cardProject";
import { useGithubRepos } from "../hooks/useGithubRepos";

export default function Projects() {
  const { t } = useTranslation();
  const { repos, loading, error } = useGithubRepos('EliNeto21');

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 transition">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark dark:text-white">{t("header.projects")}</h2>
        <Row class="align-items-stretch">
          {repos.map(repo => (
            <Col md="4" className="mb-4" key='projectCard'>
              <CardProjeto
              name={repo.name}
              description={repo.description ?? '...'}
              github={repo.html_url}
              swagger=""
              language={repo.language}/>
          </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
