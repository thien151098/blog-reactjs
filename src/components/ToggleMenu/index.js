import React, { useState } from 'react';

function ToggleMenu() {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <button onClick={() => setToggle(!toggle)} class="toggle">
                Toggle State
            </button>
            {toggle && (
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            )}
        </>
    );
}

export default ToggleMenu;
