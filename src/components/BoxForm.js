import {useState} from 'react';

const BoxForm = (props) => {
    //First bringing from App state
    const {boxList, setBoxList} = props;
    //This will handle what color is the box from the form
    const [color, setColor] = useState("");
    const formHandler = (e) => {
        e.preventDefault();

        setBoxList([...boxList, color]);
        e.target.color.value = "";
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <label>Color</label>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
                <input type="submit" value="Create New Box"/>
            </form>
        </div>
    )
}

export default BoxForm;