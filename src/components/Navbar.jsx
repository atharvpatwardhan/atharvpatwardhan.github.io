const Navbar = () =>{
    return(
        <div className="text-white font-sans font-bold bg-gray-900 rounded" style={{"width":"8%","height":"100%","position":"fixed"}}>
            <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 text-center" style={{"marginTop":"170%"}}><a href="#home">Atharv Patwardhan</a></h1>
            <div className="text-center" style={{"marginTop":"40%"}}>
                
            <ul>
                <li style={{"marginBottom":"20%","height":"40px"}} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-125"><a href="#about" className="text-white" >About</a></li>
                <li style={{"marginBottom":"20%","height":"40px"}} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-125"><a href="#skills" className="text-white" >Skills</a></li>
                <li style={{"marginBottom":"20%","height":"40px"}} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-125"><a href="#projects" className="text-white" >Projects</a></li>
                <li style={{"marginBottom":"20%","height":"40px"}} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-125"><a href="#contact" className="text-white" >Contact</a></li>
                <li style={{"marginBottom":"20%","height":"40px"}} className="hover:bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-125"><a href="#resume" className="text-white" >Resume</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;