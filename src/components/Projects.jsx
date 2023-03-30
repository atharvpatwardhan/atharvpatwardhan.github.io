import '../Projects.css'
import stock from '../img/stockmarketimg.jpg'
import eis from '../img/EIS.jpg'

const Projects = () => {
    return(
        <div style={{"height":"750px"}} id="projects">
            <div className="text-center">
            <h1 className="text-6xl text-black">Projects</h1>
            </div>

            <div className='flex'>
            <a href="https://github.com/atharvpatwardhan/StockMarketPrediction" target="_blank"><img src = {stock} alt="stock market prediction" className='hover:scale-110 hover:bg-gradient-to-r from-red-600 to-orange-500' style={{"marginLeft":"80%","marginTop":"40%","height":"250px","borderRadius":"20%"}}/></a>
            <a href="https://github.com/atharvpatwardhan/Employee-Information-System-Using-SQL"><img src = {eis} alt="Employee Information System" className='hover:scale-110 hover:bg-gradient-to-r from-red-600 to-orange-500' style={{"marginLeft":"130%","marginTop":"40%","height":"250px","borderRadius":"20%"}}/></a>
            </div>
        </div>
    )
}

export default Projects;