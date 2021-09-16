import { Square } from '../Square';
import './style.css';

export function Board({ board, handleClick }) {
    return (
        <div className="board">
            { board.map((label, i) =>
                <Square 
                    key={i}
                    index={i}
                    label={label}
                    handleClick={handleClick}
                />
            )}
        </div>
    );
}