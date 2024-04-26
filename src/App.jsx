import { useState } from 'react';
import { Container, Calc } from './styles'


const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0')
    const [firstNumber, setFirstNumber] = useState('0')
    const [operation, setOperation] = useState('')

    const handleClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
    }

    const handleAddNumber = (number) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }

    const handlePlusNumber = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('+')
        } else {
            const result = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(result))
            setOperation('')
        }
    }

    const handleMinusNumber = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        } else {
            const result = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(result))
            setOperation('')
        }
    }

    const handleMultiplyNumber = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('*')
        } else {
            const result = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(result))
            setOperation('')
        }
    }

    const handleDivideNumber = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
        } else {
            const result = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(result))
            setOperation('')
        }
    }

    const handleEquals = () => {
        switch (operation) {
            case '+':
                const sumResult = Number(firstNumber) + Number(currentNumber);
                setCurrentNumber(String(sumResult));
                break;
            case '-':
                const minusResult = Number(firstNumber) - Number(currentNumber);
                setCurrentNumber(String(minusResult));
                break;
            case '*':
                const multiplyResult = Number(firstNumber) * Number(currentNumber);
                setCurrentNumber(String(multiplyResult));
                break;
            case '/':
                const divideResult = Number(firstNumber) / Number(currentNumber);
                setCurrentNumber(String(divideResult));
                break;
            default:
                break;
        }
    }

    const handleBackspace = () => {
        setCurrentNumber(prev => prev.slice(0, -1));
    }

    return (
        <Container>
            <Calc>
                <div className="screen">
                    <span className="icon">=</span>
                    <input className="result" type="text" name="result" value={currentNumber} disabled />
                </div>
                <div className="keyboard">
                    <table className="keys">
                        <tr>
                            <td onClick={handleClear} colspan="2" className="highlight ac">AC</td>
                            <td onClick={handleBackspace} className="highlight"><img src="./bacskpace.svg" /></td>
                            <td onClick={handleDivideNumber} className="highlight">/</td>
                        </tr>

                        <tr>
                            <td onClick={() => handleAddNumber(7)}>7</td>
                            <td onClick={() => handleAddNumber(8)}>8</td>
                            <td onClick={() => handleAddNumber(9)}>9</td>
                            <td onClick={handleMultiplyNumber} className="highlight">*</td>
                        </tr>

                        <tr>
                            <td onClick={() => handleAddNumber(4)}>4</td>
                            <td onClick={() => handleAddNumber(5)}>5</td>
                            <td onClick={() => handleAddNumber(6)}>6</td>
                            <td onClick={handleMinusNumber} className="highlight">-</td>
                        </tr>

                        <tr>
                            <td onClick={() => handleAddNumber(1)}>1</td>
                            <td onClick={() => handleAddNumber(2)}>2</td>
                            <td onClick={() => handleAddNumber(3)}>3</td>
                            <td onClick={handlePlusNumber} className="highlight">+</td>
                        </tr>

                        <tr>
                            <td>0</td>
                            <td onClick={() => handleAddNumber(".")}>.</td>
                            <td onClick={handleEquals} colspan="2" className="equal">=</td>
                        </tr>
                    </table>
                </div>
            </Calc>
        </Container>
    );
}

export default App;
