import React,{ useState} from 'react'
import FsLightbox from 'fslightbox-react';

import { Row, Col,Table} from "react-bootstrap"
export const ProjectItem = ({ data }) => {
    const [toggler,setToggler] = useState(false)
    return (
        <Row className="border-2 border-bottom border-primary mb-5 pb-5">
            <Col lg="6" className="mb-3">
                <h3>{data.title}</h3>
                {data.paragraphs.map((item,it) => <p className="paragraph" key={it}>{item}</p>)}
                {data.links.map((link,it) => {
                    return (
                        <div key={it} className="project-links d-flex align-items-md-center flex-column flex-sm-row">
                            <p className="m-0 me-2 project-link-desc">
                                {link.name}
                                <i className="ms-2 fas fa-arrow-alt-circle-right"></i>
                            </p>
                            <a rel="noopener noreferrer" target="_blank" className="project-link bg-primary my-2"
                                href={link.url}>
                                <i className={`me-1 ${link.icon}`}></i>
                                <span>{link.url}</span>
                            </a>
                        </div>
                    )
                })}
                <h4 className="fs-3">{data.extras.techs_text}</h4>
                <div className="d-flex flex-wrap">
                    {data.technologies.map((tech,it) => 
                        <div key={it}>
                            <img src={require(`./../../assets/images/technologies/${tech}`)} alt={tech}
                                className={`tech-img ${tech==="react.svg"?"bg-dark":""} p-3 rounded-custom`} />
                        </div>
                    )}
                </div>
            </Col>
            <Col lg="6">
                <div className="gallery my-auto">
                    <img src={require(`./../../assets/images/projects/${data.gallery[0]}`)}
                        className="img-fluid rounded shadow-lg" alt="webpage"/>
                    <div className="gallery-overlay rounded">
                        <span onClick={() => setToggler(!toggler)} className="gallery-button">
                            <i className={`me-1 ${data.gallery_buttons.gallery.icon}`}></i>
                            {data.gallery_buttons.gallery.name}
                        </span>
                        <span className="gallery-button">
                            <a href={data.gallery_buttons.project.url} rel="noopener noreferrer" target="_blank" >
                                <i className={`me-1 ${data.gallery_buttons.project.icon}`}></i>
                                {data.gallery_buttons.project.name}
                            </a>
                        </span>
                    </div>
                </div>
                {data.credentials && (
                    <>
                        <div className="h3 mt-2 mb-0">
                            {data.credentials.description}
                        </div>
                        <div className='table-responsive'>
                            {data.credentials.tables.map( (table) => (
                                <Table className="table-sm table-responsive">
                                    <thead className="table-dark">
                                        <tr>
                                        {table.headers.map((header,index) => (
                                            <th key={index} style={{width: header.width+'%'}}>{header.name}</th>
                                        ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table.body.map((row,index) => (
                                            <tr key={index}>
                                            {Object.keys(row).map((key,index) => (    
                                                <td key={index}>{row[key]}</td>
                                            ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            ))}
                        </div>
                    </>
                )}
                <div>
                </div>
                <FsLightbox toggler={toggler}
                    sources={data.gallery.map(photo => 
                        require(`./../../assets/images/projects/${photo}`))
                        }/>
            </Col>
        </Row>
    )
}
