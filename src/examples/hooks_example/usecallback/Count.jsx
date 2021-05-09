import React from 'react';

function Count({ count }) {
    console.log("usecallback count")
    return (
        <div>
            {count}
        </div>
    );
}

export default React.memo(Count);