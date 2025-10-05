import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useTranslation } from "react-i18next";
import type { Article } from '../interfaces/article';

export const CardArticle: React.FC<Article> = 
  (article) => {

  const { t } = useTranslation();

  return (
    <Card className="shadow-sm bg-white dark:bg-gray-800 border-0 transition">
      <CardBody>
        <CardTitle tag="h5" className="text-dark dark:text-white">{article.name}</CardTitle>
        <CardText className="text-muted dark:text-gray-300">
          {article.description}
        </CardText>
        <a href={article.link ?? undefined} target="_blank" rel="noopener noreferrer">
            <Button color="link" className="text-primary dark:text-blue-400 p-0">
                {t("blog.readMore") ?? "Ler mais →"}
            </Button>
        </a>
      </CardBody>
    </Card>
  )
}