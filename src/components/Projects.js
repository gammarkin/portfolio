import React from 'react'
import Project from './Project'
import projects from '../data/projects'

export default function Projects() {
    return (
        <section>
            {
                projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            img={project.image}
                            link={project.link}
                            description={project.description}
                            title={project.title}
                            planet={project.planet}
                        />
                    )
                })
            }
        </section>
    )
}
