import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NET from "../lib/vanta.net.min"
import * as THREE from 'three'

const useStyles = makeStyles(theme => ({
  effect: {
    width: "100%",
    height: "100vh"
  }
}))

const Effect = ({children}) => {
  const classes = useStyles()
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaNet = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaNet.current,
        THREE: THREE,
        color: 0x5e2f3f,
        backgroundColor: 0xb79d9d
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={vantaNet} className={classes.effect}>
      {children}
    </div>
  )
}

export default Effect
