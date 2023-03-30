import linkedin from '../img/linkedin-in.svg'
import github from '../img/github.svg'

const Contact = () => {
    return (
        <div style={{"height":"600px"}} id="contact">
          <div className="text-center">
          <h1 className="text-6xl text-transparent bg-gradient-to-b from-blue-700 to-blue-500 bg-clip-text">Contact</h1>
          </div>
        <form>
          <h1 className="text-white" style={{"marginLeft":"38%","marginTop":"5%","position":"absolute"}}>Name:</h1>
          <input id='form4Example1'label='Name'style={{"position":"absolute","marginTop":"5%","marginLeft":"43%","width":"20%"}} />
          <h1 className="text-white" style={{"marginLeft":"38%","marginTop":"10%","position":"absolute"}}>Email:</h1>
          <input type='email' id='form4Example2' label='Email address' style={{"marginTop":"10%","position":"absolute","marginLeft":"43%","width":"20%"}} />
          <h1 className="text-white" style={{"marginLeft":"38%","marginTop":"15%","position":"absolute"}}>Message:</h1>
          <textarea id='form4Example3' rows={4} label='Message' textarea style={{"marginTop":"15%","position":"absolute","marginLeft":"43%","width":"20%"}}/>


          <button className="bg-transparent hover:bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"  style={{"marginLeft":"48%","marginTop":"25%"}}>
          Submit
          </button>
        </form>

        <div id="socials" className='flex bg-gradient-to-r from-purple-700 to-blue-600' style={{"marginTop":"5%","height":"200px"}}>
          <a href="https://www.linkedin.com/in/atharv-patwardhan/"><img src = {linkedin} alt="linkedin" style={{"height":"50px","marginLeft":"45%","marginTop":"5%","position":"absolute"}}/></a>
          <a href="https://github.com/atharvpatwardhan"><img src = {github} alt="github" style={{"height":"50px","marginLeft":"55%","marginTop":"5%","position":"absolute"}}/></a>

        </div>
        </div>

    )
}

export default Contact;