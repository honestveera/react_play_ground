import React, {useState} from 'react';
import HookUseEffect from './hook_useeffect';

function MouseContainer() {
   const [flag, setFlag] = useState(true);

    return (
        <div>
            <button onClick={e => setFlag(!flag)}>Toggle Button</button>
            {flag && <HookUseEffect/>}
        </div>
    );
}

export default MouseContainer;