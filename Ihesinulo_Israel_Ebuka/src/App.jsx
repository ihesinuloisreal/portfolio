import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/project/project.component';
import Contact from './components/contact/contact.component';
import Provider from './context/Provider.context'

const App = () => {
  return (
    <Provider>
    <div className=''>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
    </Provider>
  )
}

export default App