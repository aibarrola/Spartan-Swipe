import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

export const DashboardActions = () => {
    return (
        <div class="dashBtn">
        <Link to="/edit-profile" class="editProfileBtn"> Edit Profile</Link>
      </div>
    )
}

export default DashboardActions;