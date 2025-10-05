import { Container } from "reactstrap";

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-gray-800 py-4 mt-5 text-center transition">
      <Container>
        <p className="mb-0 text-gray-700 dark:text-gray-300">
          © 2025 - Feito com ☕ + 💻 por Eli
        </p>
      </Container>
    </footer>
  );
}