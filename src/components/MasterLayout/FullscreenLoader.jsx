import React, {Fragment} from 'react';
import { useSelector } from 'react-redux'
export default function FullscreenLoader(){
    const loader = useSelector((state) => state.setting.loader)
    return (
        <Fragment>
            <div className={loader+" LoadingOverlay"}>
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </Fragment>
    );
};
