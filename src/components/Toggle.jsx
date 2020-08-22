import React from 'react'

function Toggle() {
    return (
        <div>
            <div class="toggle">
                <span>Dark Mode</span>
                    <span>
                        <input type="checkbox" id="toggleSwitch" class="toggle__input">
                        </input>
                            <label class="toggle__switch" for="toggleSwitch">
                                <span class="toggle__slider"></span>
                            </label>
                    </span>
            </div>
        </div>
    )
}

export default Toggle

