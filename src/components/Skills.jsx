
const Skills = () =>{
    return(
        <div style={{"height":"750px"}} id="skills">
            <div className="text-center my-11">
            <h1 className="text-6xl text-transparent bg-gradient-to-b from-blue-700 to-blue-500 bg-clip-text">Skills</h1>
            <div className="flex text-white" style={{"marginTop":"5%"}}>
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl shadow-black rounded-md" style={{"width":"20%","marginLeft":"10%","marginTop":"1%","marginBottom":"5%"}}>
            <h3 className="font-bold text-3xl">Languages</h3>
            <ul>
                <li style={{"margin":"5%"}} className="text-2xl">Java</li>
                <li style={{"margin":"5%"}} className="text-2xl">Python</li>
                <li style={{"margin":"5%"}} className="text-2xl">Python</li>
                <li style={{"margin":"5%"}} className="text-2xl">C++</li>
                <li style={{"margin":"5%"}} className="text-2xl">C</li>
                <li style={{"margin":"5%"}} className="text-2xl">Javascript</li>
                <li style={{"margin":"5%"}} className="text-2xl">PHP</li>
            </ul>              
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl shadow-black rounded-md" style={{"width":"20%","margin":"auto","marginTop":"1%","marginLeft":"4%","marginBottom":"5%"}}>
            <h3 className="font-bold text-3xl">Frontend</h3>
            <ul>
                <li style={{"margin":"5%"}} className="text-2xl">React</li>
                <li style={{"margin":"5%"}} className="text-2xl">HTML</li>
                <li style={{"margin":"5%"}} className="text-2xl">CSS</li>
                <li style={{"margin":"5%"}} className="text-2xl">Bootstrap</li>
            </ul>              
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl shadow-black rounded-md" style={{"width":"20%","margin":"auto","marginTop":"1%","marginBottom":"5%"}}>
            <h3 className="font-bold text-3xl">Database</h3>
            <ul>
                <li style={{"margin":"5%"}} className="text-2xl">SQL</li>
                <li style={{"margin":"5%"}} className="text-2xl">MongoDB</li>
                <li style={{"margin":"5%"}} className="text-2xl">Oracle SQL</li>
            </ul>              
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl shadow-black rounded-md" style={{"width":"20%","margin":"auto","marginTop":"1%","marginBottom":"5%"}}>
            <h3 className="font-bold text-3xl">Other Technologies</h3>
            <ul>
                <li style={{"margin":"5%"}} className="text-2xl">Git</li>
                <li style={{"margin":"5%"}} className="text-2xl">Flask</li>
                <li style={{"margin":"5%"}} className="text-2xl">Selenium</li>
                <li style={{"margin":"5%"}} className="text-2xl">Linux</li>
                <li style={{"margin":"5%"}} className="text-2xl">Tailwind</li>
            </ul>              
            </div>


            </div>
            </div>

        </div>
    )
}

export default Skills;