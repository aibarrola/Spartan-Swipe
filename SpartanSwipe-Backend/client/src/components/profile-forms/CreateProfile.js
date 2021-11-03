import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        department: '',
        bio: '',
        degrees: '',
        facebook: '',
        discord: '',
        linkedin: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        department,
        bio,
        degrees,
        facebook,
        discord,
        linkedin
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
            Create Your Profile
        </h1>
        <p className="lead">
            <i className="fas fa-user"></i> Let's get some information to make your
            profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <select name="department" value={department} onChange={e => onChange(e)}>
                <option value="0">* Department</option>
                <option value="Athletics (Intercollegiate)">Athletics (Intercollegiate)</option>
                <option value="Charles W. Davidson College of Engineering">Charles W. Davidson College of Engineering</option>
                <option value="College of Graduate Studies">College of Graduate Studies</option>
                <option value="College of Health and Human Sciences">College of Health and Human Sciences</option>
                <option value="College of Humanities and the Arts">College of Humanities and the Arts</option>
                <option value="College of Professional and Global Education">College of Professional and Global Education</option>
                <option value="College of Science">College of Science</option>
                <option value="College of Social Sciences">College of Social Sciences</option> 
                <option value="Connie L. Lurie College of Education">Connie L. Lurie College of Education</option>
                <option value="Lucas College and Graduate School of Business">Lucas College and Graduate School of Business</option>
                <option value="Undeclared">Undeclared</option>
                <option value="Undergraduate Education">Undergraduate Education</option>
                <option value="Other">Other</option>
            </select>
            <small className="form-text">
                What department is your major under?
            </small>
            </div>
            
            <div className="form-group">
            <input type="text" placeholder="* Degree(s) & Concentration(s)" name="degrees" value={degrees} onChange={e => onChange(e)}/>
            <small className="form-text"
                >Please use comma separated values (eg.
                B:Biology,A:Chemistry,C:Microbiology)
            </small>
            <small className="form-text">
                <i>[A: Associates, B: Bachelor's, C: Concentration, D: Doctorate, M: Masters]</i>
            </small>
            </div>

            <div className="form-group">
            <textarea placeholder="About Me" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
            <small className="form-text">Tell us a little about yourself and your hobbies</small>
            </div>

            <div className="my-2">
            <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                Add Social Network Links
            </button>
            <span>Optional</span>
            </div>

            {displaySocialInputs && <Fragment>
                <div className="form-group social-input">
                <input type="text" placeholder="Discord Username" name="discord" value={discord} onChange={e => onChange(e)}/>
                </div>

                <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x"></i>
                <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}/>
                </div>

                <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x"></i>
                <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}/>
                </div>
            </Fragment>}

            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
        </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
};
// Need to wrap CreateProfile with withRouter because if we don't, the function won't allow history object to be passed
// and used from the action
export default connect(null, { createProfile })(withRouter(CreateProfile));
