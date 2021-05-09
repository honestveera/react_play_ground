import React from 'react';

function Title() {
    console.log("usecallback Title")
    return (
        <div>
         <h1>UseCallback Title</h1>
        </div>
    );
}

export default React.memo(Title);