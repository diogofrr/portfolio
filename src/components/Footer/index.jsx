import './styles.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p>Copyright &#169; {year} | Criado por Diogo Henrique Ferreira.</p>
    </footer>
  );
};
