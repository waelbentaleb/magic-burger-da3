import React from 'react'
import classes from './Modal.module.css'

const modal = (props) => {

  console.log('[Modal.js] rendering');

  return (
    <div>

      <div
        className={props.shouldShow ? classes.Backdrop : null}
        onClick={props.showOrHideModal}
      >

      </div>

      <div
        className={classes.Modal}
        style={{
          // opacity: props.shouldShow ? 1 : 0
          transform: props.shouldShow ? 'translateY(0)' : 'translateY(-200vh)'
        }}
      >
        {props.children}
      </div>

    </div>

  )
}

export default modal