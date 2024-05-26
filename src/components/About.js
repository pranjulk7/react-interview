    import React, { useState } from 'react'

    export default function About() {

        const [darkMode, setDarkMode] = useState(false);
        
        const [theme, setTheme] = useState("Enable Dark Mode");
        const [myStyle, setMyStyle] = useState({
            color : 'black',
            backgroundColor : 'white',
            border: '1px solid black'
        })


       const handleOnClickDarkMode   = () =>{
            if(darkMode == false){
                setDarkMode(true);
                setTheme("Enable Light Mode");
                setMyStyle({
                    color : 'grey',
                    backgroundColor : 'black',
                    border: '1px solid silver'
                    })
            }
            else{
                setDarkMode(false);
                setTheme("Enable Dark Mode");
                setMyStyle({
                    color : 'black',
                    backgroundColor : 'white',
                    border: '1px solid black'
                    })

            }

        }
    return (
        <div className="container p-4" style={myStyle} >
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                </div>
                <div className="container">
                    <button className="btn btn-primary" onClick={handleOnClickDarkMode}>{theme}</button>
                </div>
        </div>
    )
    }
