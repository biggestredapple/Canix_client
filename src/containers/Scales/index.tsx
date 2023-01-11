import React, { useState } from 'react';

// import components
import { UploadComponent } from '../../components';
import { ScalesDisplayComponent } from '../../components';

const ScalesContainer = () => {
    const [stateMsg, setStateMsg] = useState<string>("")

    return (
        <div>
            <UploadComponent />
            <ScalesDisplayComponent />
        </div>
    )
}

export default ScalesContainer;