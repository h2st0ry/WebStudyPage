import React, {useState} from "react";

export default function Tools() {

    const [display, setDisplay] = useState('');
    const [expression, setExpression] = useState('');
    const [operatorClicked, setOperatorClicked] = useState(false); 

    const handleClear = () => {
        setDisplay('');
        setExpression('');
    };

    const handleClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(expression.replace('×', '*').replace('÷', '/'));
                setDisplay(result.toString());
                setExpression(result.toString());
            } catch (error) {
                setDisplay('Error');
                setExpression('');
            }
            setOperatorClicked(false);
        } else if (['+', '-', '×', '÷'].includes(value)) {
            if (operatorClicked) return;//
            setExpression(prev => prev + value);
            setOperatorClicked(true);
        } else {
            if (operatorClicked) {
                setDisplay(value);
                setExpression(prev => prev + value);
                setOperatorClicked(false);
            }
            else {
                setDisplay(prev => prev + value); // 숫자 추가
                setExpression(prev => prev + value);
            }
        }
        
        console.log(value)
    };
    return (
        <div>
            <h1>You Need Something?</h1>
            <div>
                <table id="Calculator">
                    <tr>
                        <td className="CalInOut" colSpan={4}><span>{display}</span>
                        <button className="ClearButton" onClick={handleClear}>C</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="CalculatorKey" onClick={() => handleClick('7')}>7</td>
                        <td className="CalculatorKey" onClick={() => handleClick('8')}>8</td>
                        <td className="CalculatorKey" onClick={() => handleClick('9')}>9</td>
                        <td className="CalculatorKey" onClick={() => handleClick('÷')}>÷</td>
                    </tr>
                    <tr>
                        <td className="CalculatorKey" onClick={() => handleClick('4')}>4</td>
                        <td className="CalculatorKey" onClick={() => handleClick('5')}>5</td>
                        <td className="CalculatorKey" onClick={() => handleClick('6')}>6</td>
                        <td className="CalculatorKey" onClick={() => handleClick('×')}>×</td>
                    </tr>
                    <tr>
                        <td className="CalculatorKey" onClick={() => handleClick('1')}>1</td>
                        <td className="CalculatorKey" onClick={() => handleClick('2')}>2</td>
                        <td className="CalculatorKey" onClick={() => handleClick('3')}>3</td>
                        <td className="CalculatorKey" onClick={() => handleClick('-')}>-</td>
                    </tr>
                    <tr>
                        <td className="CalculatorKey" onClick={() => handleClick('0')}>0</td>
                        <td className="CalculatorKey" onClick={() => handleClick('.')}>.</td>
                        <td className="CalculatorKey" onClick={() => handleClick('=')}>=</td>
                        <td className="CalculatorKey" onClick={() => handleClick('+')}>+</td>
                    </tr>

                </table>
            </div>
        </div>
    );
}