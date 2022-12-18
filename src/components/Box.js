import React from "react";
const Box = (props) => {
    //Passing the previous list state from App
    const {boxList} = props;
    return (
        <div>
            {
            boxList && boxList.map((color, index) => (
                <div key={index} style={{ 
                    display: "inline-block",
                    margin: "10px",
                    height: "50px", 
                    width: "50px", 
                    backgroundColor: color
                    }}>
                </div>
            ))
            }
        </div>
        );
    }

export default Box;