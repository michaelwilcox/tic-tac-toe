import './style.css';

export function Square({ index, label, handleClick }) {
    return (
        <div className="square" onClick={() => handleClick(index)}>{label}</div>
    );
}