import "../style/ErrorMessage.scss";

// Component that displays an error message
const ErrorMessage = ({ message }) => {
  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;
