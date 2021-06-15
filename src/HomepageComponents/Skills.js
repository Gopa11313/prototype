import React, { Component } from 'react'
import { BrushFill } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap'
export class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="p-2 my-5"style={{ backgroundColor: "#EDEDED"}} >
                    <Container>
                        <div className="row my-5">
                            <div className="col-6 col-md-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-brush-fill" viewBox="0 0 20 20">
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
                                </svg>
                                <p style={{ fontSize: '16px' }}>CLEAN & MORDEN DESIGN</p>
                                <p style={{ fontSize: '14px' }}>We harness the power of Wordpress's Theme Cutomerizer empowering you to modify and preview change in real-life
                                    before going live.</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-gear-fill" viewBox="0 0 20 20">
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                </svg>
                                <p style={{ fontSize: '16px' }}>POWER THEME CUSTOMIZER</p>
                                <p style={{ fontSize: '14px' }}>We harness the power of Wordpress's Theme Cutomerizer empowering you to modify and preview change in real-life
                                    before going live.</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trophy-fill" viewBox="0 0 20 20">
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                                </svg>
                                <p style={{ fontSize: '16px' }}>FULL SCREEN SHOWCASE</p>
                                <p style={{ fontSize: '14px' }}>We harness the power of Wordpress's Theme Cutomerizer empowering you to modify and preview change in real-life
                                    before going live.</p>
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-6 col-md-4">
                                <svg
                                    width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" >
                                    <path
                                        d="M8.12132 9.87868L10.2044 11.9617L10.2106 11.9555L11.6631 13.408L11.6693 13.4142L13.7907 15.5355C15.7433 17.4882 18.9091 17.4882 20.8617 15.5355C22.8144 13.5829 22.8144 10.4171 20.8617 8.46447C18.9091 6.51184 15.7433 6.51184 13.7907 8.46447L13.0773 9.17786L14.4915 10.5921L15.2049 9.87868C16.3764 8.70711 18.2759 8.70711 19.4475 9.87868C20.6191 11.0503 20.6191 12.9497 19.4475 14.1213C18.2759 15.2929 16.3764 15.2929 15.2049 14.1213L13.1326 12.0491L13.1263 12.0554L9.53553 8.46447C7.58291 6.51184 4.41709 6.51184 2.46447 8.46447C0.511845 10.4171 0.511845 13.5829 2.46447 15.5355C4.41709 17.4882 7.58291 17.4882 9.53553 15.5355L10.2488 14.8222L8.83463 13.408L8.12132 14.1213C6.94975 15.2929 5.05025 15.2929 3.87868 14.1213C2.70711 12.9497 2.70711 11.0503 3.87868 9.87868C5.05025 8.70711 6.94975 8.70711 8.12132 9.87868Z"
                                        fill="red"
                                    />
                                </svg>
                                <p style={{ fontSize: '16px' }}>UNLIMITED COLOR STYLES</p>
                                <p style={{ fontSize: '14px' }}>We harness the power of Wordpress's Theme Cutomerizer empowering you to modify and preview change in real-life
                                    before going live.</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-book-fill" viewBox="0 0 16 16">
                                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                </svg>
                                <p style={{ fontSize: '16px' }}>DOCUMENTATION AND HD VIDEO TUTS</p>
                                <p style={{ fontSize: '14px' }}>We harness the power of Wordpress's Theme Cutomerizer empowering you to modify and preview change in real-life
                                    before going live.</p>
                            </div>
                            <div className="col-6 col-md-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-filter-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <p style={{ fontSize: '16px' }}>DEDICATED ONE ON ONE SUPPORT</p>
                                <p style={{ fontSize: '14px' }}>We harness the power of Wordpress's Theme Cutomerizer empowering you to modify and preview change in real-life
                                    before going live.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
export default Skills