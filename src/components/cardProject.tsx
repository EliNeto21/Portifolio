import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useTranslation } from "react-i18next";
import type { Project } from "../interfaces/project"

export const CardProjeto: React.FC<Project> = 
  (project) => {

  const { t } = useTranslation();

  return (
    <Card className="shadow-sm bg-white dark:bg-gray-800 border-0 transition">
      <CardBody>
        <CardTitle tag="h5" className="text-dark dark:text-white">{project.name}</CardTitle>
        <CardText className="text-muted dark:text-gray-300">
          {project.description}
        </CardText>
        <div className="d-flex gap-3">
          <a href={project.github ?? undefined} target="_blank" rel="noopener noreferrer">
            <Button color="primary" size="sm">GitHub</Button>
          </a>
          <a href={project.swagger ?? undefined} target="_blank" rel="noopener noreferrer">
            <Button color="secondary" size="sm">Swagger</Button>
          </a>
        </div>
      </CardBody>
    </Card>
  )
}