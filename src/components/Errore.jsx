import '../style/ErrorMessage.css'

// Componenbte che mostra il messaggio d'errore
const Errore = ({ messaggio }) => {
  return <p className="error-message">{messaggio}</p>;
};

export default Errore;