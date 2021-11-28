import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import './Dashboard.css'

// [] at the end of a useEffect means it will only run once
const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    
    return ( 
        <Fragment>
            {/* <h1 className='large text-primary'>Dashboard</h1> */}

            <div className="centerDash">
                <h1> Welcome {user && user.name} </h1>
            </div>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />

                    <div className="dashBtn">
                        <button className="deleteBtn" onClick={() => deleteAccount()}>
                            Delete my account
                        </button>
                    </div>
                </Fragment> 
            ) : (
                <Fragment>
                    <div className="centerBtn">
                        <Link to ='/create-profile' className='setupBtn'>Set up profile!</Link>
                    </div>
                </Fragment>
                
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
