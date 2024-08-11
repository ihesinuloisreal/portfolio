import {ProjectProvider, ProjectPostProvider} from './request.context';


const Provider = ({children}) => {
    return(
        <ProjectProvider>
            <ProjectPostProvider>
                {children}
            </ProjectPostProvider>
        </ProjectProvider>
    )
}
export default Provider;