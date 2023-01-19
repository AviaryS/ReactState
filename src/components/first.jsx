import React, {useState} from 'react';

function First(props) {
    const [fname, setFname] = useState("Arseniy");
    const [lname, setLname] = useState("Muratov");
    const [age, setAge] = useState("16");

    const [ban, setBan] = useState(false);

    return (
        <div>
            <div>
                <br/> task 1 <br/>
                <p>Имя: {fname}</p>
                <p>Фамилия {lname}</p>
                <p>Возраст: {age}</p>
            </div>
            <div>
                <br/> task 2 <br/>
                <button onClick={() => setFname("New Name")}>Поменять имя</button>
                <button onClick={() => setLname("New LastName")}>Поменять фамилию</button>
            </div>
            <div>
                <br/><br/> task 3, 4, 5 <br/>
                <button hidden={ban} onClick={() => setBan(true)}>Ban</button>
                <button hidden={!ban} onClick={() => setBan(false)}>unBan</button>
                <p>{ban ? "В бане" : "Не в бане"}</p>
            </div>
            <div>
                <br/> task 6 <br/><br/>
                <button onClick={() => setAge(+age + 1)}>+1</button>
                <button onClick={() => setAge(+age - 1)}>-1</button>
            </div>
        </div>
    );
}

export default First;