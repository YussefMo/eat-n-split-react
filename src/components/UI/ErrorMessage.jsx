import Button from "./Button";

function ErrorMessage ({ onClose , errorMessage }) {
return (
    <div className="error-window" onClick={onClose}>
        <div className="error-body">
            <h1>Error</h1>
            <p>{errorMessage}</p>
            <Button onClick={onClose}>❌</Button>
        </div>
    </div>
)
}

export default ErrorMessage