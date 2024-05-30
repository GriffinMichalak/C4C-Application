import React, { useState } from 'react';

function ActiveDropdown() {

    return (
        <div id="active-dropdown">
            <label htmlFor='active-dropdown'>Status: </label>
            <select id="active-dropdown" name="active-dropdown">
                <option value="all">All</option>
                <option value="active">✅ Active</option>
                <option value="inactive">❌ Inactive</option>
            </select>
        </div>
    )
}

export default ActiveDropdown;
