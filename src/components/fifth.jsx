import React, {useState} from 'react';

function Fifth() {
    const [value, setValue] = useState('');

    const towns = ['Город 1', 'Город 2', 'Город 3', 'Город 4'];

    const options = towns.map((towns, index) => {
        return <option key={index}>{towns}</option>;
    });

    const [value2, setValue2] = useState('');

    const old = ['от 0 до 12', 'от 13 до 17', 'от 18 до 25', 'старше 25'];

    const oldoption = old.map((old, index) => {
        return <option key={index}>{old}</option>;
    });

    //   radio

    const [radio, setRadio] = useState(0);
    const [radio2, setRadio2] = useState(0);

    return (
        <div>
            <div>
                <br/><br/><br/> task 1 <br/><br/>
                <select value={value} onChange={event => setValue(event.target.value)}>
                    <option>Город 1</option>
                    <option>Город 2</option>
                    <option>Город 3</option>
                    <option>Город 4</option>
                </select>
                <p>Ваш выбор: {value}</p>
            </div>
            <div>
                <br/><br/> task 2 <br/>
                <p>  города в массиве: {options}</p>
            </div>
            <div>
                <br/><br/> task 3 <br/>
                <select value={value2} onChange={event => setValue2(event.target.value)}>
                    {oldoption}
                </select>
                <p>ваш выбор: {value2}</p>
            </div>
            <div>
                <br/><br/> task 4 <br/>
                <input
                    type="radio"
                    name="radio"
                    value="1"
                    checked={radio === '1' ? true : false}
                    onChange={(event) => setRadio(event.target.value)}
                />
                <input
                    type="radio"
                    name="radio"
                    value="2"
                    checked={radio === '2' ? true : false}
                    onChange={(event) => setRadio(event.target.value)}
                />
                <input
                    type="radio"
                    name="radio"
                    value="3"
                    checked={radio === '3' ? true : false}
                    onChange={(event) => setRadio(event.target.value)}
                />
                <p>{radio}</p>
            </div>
            <div>
                <br/><br/> task 5  <br/><br/>
                <input
                    type="radio"
                    name="radio2"
                    value="фе"
                    checked={radio2 === 'фе' ? true : false}
                    onChange={event => setRadio2(event.target.value)}
                />
                JAVASCRIPT
                <input
                    type="radio"
                    name="radio2"
                    value="мазохист"
                    checked={radio2 === 'мазохист' ? true : false}
                    onChange={(event) => setRadio2(event.target.value)}
                />
                C++
                <input
                    type="radio"
                    name="radio2"
                    value="умничка"
                    checked={radio2 === 'умничка' ? true : false}
                    onChange={(event) => setRadio2(event.target.value)}
                />
                Python
                <p>{radio2}</p>
            </div>
        </div>
    );
}


export default Fifth;