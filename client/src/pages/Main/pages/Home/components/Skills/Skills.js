import React, { Component } from "react";
import "./Skills.css"

class Skills extends Component {
    render() {
        return (
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header" >
                            Skills
                    </div>
                        <div className="card-body">
                            {this.props.skills.length ?
                                (
                                    <ul >
                                        {this.props.skills.map((skill, index) => (
                                            <li key={`skill${index}`}>
                                                <h2>{skill}</h2>
                                            </li>
                                        ))}
                                    </ul>
                                )
                                :
                                (
                                    <h3>No Skills to Display </h3>
                                )}
                            <div className="form-group">
                                <input className="form-control" value={this.props.skill} onChange={this.props.onChange} name="skill" placeholder="skill" />
                            </div>
                            <button className="btn btn-primary" disabled={!(this.props.skill)} onClick={this.props.onClick}>
                                Add Skill
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;


// WEBPACK FOOTER //
// ./src/components/pages/Main/pages/Home/components/Skills/Skills.js