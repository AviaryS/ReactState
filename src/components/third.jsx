import React, {useState} from 'react';

function Third(props) {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);

    const [dateInput1, setDateInput1] = useState(new Date());
    const [dateInput2, setDateInput2] = useState(new Date());
    const [dateSum, setDateSum] = useState(0);

    const [input4, setInput4] = useState(0);
    const [result4, setResult4] = useState(0);

    const [input5, setInput5] = useState(0);
    const [result5, setResult5] = useState(0);


    function divisors(integer) {
        var result = 1;
        for (let i = 0; i <= integer; i++) {
            if (integer % i === 0) {
                result *= i;
            }
        }

        return result;
    }
    return (
        <div>
            <div>
                <br/><br/> task 1 <br/>
                <input type="number" value={input1} onChange={event => setInput1(event.target.value)}/>
                <input type="number" value={input2} onChange={event => setInput2(event.target.value)}/>
                <button onClick={() => setResult(Number(input1) + Number(input2))}>сумма чисел</button>
                <button onClick={() => setResult(Number(input1) * Number(input2))}>произведение чисел</button>
                <p>{result}</p>
            </div>
            <div>
                <br/> task 2,3 <br/>
                <input type="date" value={dateInput1} onChange={event => setDateInput1(event.target.value)}/>
                <input type="date" value={dateInput2} onChange={event => setDateInput2(event.target.value)}/>
                <button onClick={() => setDateSum(new Date(dateInput2) - new Date(dateInput1))}>
                    разница дней
                </button>
                <p>{dateSum / (60 * 60 * 24 * 1000)}</p>
            </div>
            <div>
                <br/><br/> task 4 <br/>
                <input
                    value={input4}
                    onChange={event => setInput4(event.target.value)}
                    onBlur={() =>
                        setResult4(
                            input4
                                .toString()
                                .split('')
                                .reduce(function (a, b) {
                                    return a + parseInt(b);
                                }, 0),
                        )
                    }
                />
            </div>
                <p>{result4}</p>
            <div>
                <br/><br/> task 5 <br/>
                <input
                    value={input5}
                    onChange={event => setInput5(event.target.value)}
                    onBlur={event => setResult5(divisors(event.target.value))}
                />
                <p>{result5}</p>
            </div>
        </div>
    );
}

export default Third;