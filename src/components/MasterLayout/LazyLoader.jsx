import React, {Fragment} from 'react';
export default function LazyLoader(){
    return (
        <Fragment>
            <div  className="LoadingOverlay">
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </Fragment>
    );
};