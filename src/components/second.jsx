import React, {useState} from 'react';

function Second(props) {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const [countValue, setCountValue] = useState(0);

    const [year, setYear] = useState();
    const [degree, setDegree] = useState();

    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3,setInput3] = useState(0);
    const [input4, setInput4] = useState(0);
    const [input5, setInput5] = useState(0);
    return (
        <div>
            <div>
                <br/><br/> task 1 <br/>
                <input type="text" value={value1} onChange={event => setValue1(event.target.value)}/>
                <p>{value1}</p>
                <br/>
                <input type="text" value={value2} onChange={event => setValue2(event.target.value)}/>
                <p>{value2}</p>
            </div>
            <div>
                <br/><br/> task 2 <br/>
                <input type="text" onChange={event => setCountValue(event.target.value.length)}/>
                <p>{countValue}</p>
            </div>
            <div>
                <br/><br/> task 3 <br/>
                <input type="number" onChange={event => setYear(2023 - event.target.value)}/>
                <p>Год рождения: {year}</p>
            </div>
            <div>
                <br/><br/> task 4 <br/>
                <input type="number" onChange={event => setDegree(event.target.value * 9 / 5 + 32)}/>
                <p>Градус Фаренгейта: {degree}</p>
            </div>
            <div>
                <br/><br/> task 5 <br/>
                <input type="number" value={input1} onChange={event => setInput1(event.target.value)}/>
                <input type="number" value={input2} onChange={event => setInput2(event.target.value)}/>
                <input type="number" value={input3} onChange={event => setInput3(event.target.value)}/>
                <input type="number" value={input4} onChange={event => setInput4(event.target.value)}/>
                <input type="number" value={input5} onChange={event => setInput5(event.target.value)}/>
                <p>{(+input1 + +input2 + +input3 + +input4 + +input5) / 5}</p>
            </div>
        </div>
    );
}

export default Second;