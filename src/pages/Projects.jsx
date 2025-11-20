import { useState } from 'react'
import Project from '../components/Project'

function Projects() {

    return (
        <div className='text-red-600 text-2xl bg-gray-100 gap-6 flex flex-col rounded-2xl p-6'>
            <Project 
                title='Titulo de prueba'
                description='Esta es una descripcion de prueba para ver como se ve el componente de proyecto dentro de la pagina de proyectos'
                imageURL='https://cdn.mos.cms.futurecdn.net/xfAAkdNtRztZY8SfStcmkD.jpg'
                codeURL=''
                demoURL=''
                tags={['diseño', 'desarrollo', 'Edicion de video']}
                key=''
            />
            <Project 
                title='Titulo de prueba'
                description='Esta es una descripcion de prueba para ver como se ve el componente de proyecto dentro de la pagina de proyectos'
                imageURL='https://cdn.mos.cms.futurecdn.net/xfAAkdNtRztZY8SfStcmkD.jpg'
                codeURL=''
                demoURL=''
                tags={['diseño', 'desarrollo', 'Edicion de video']}
                key=''
            />
        </div>
    )
}

export default Projects