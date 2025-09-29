import React from 'react'
import useReveal from '../hooks/useReveal'

const directionClass = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
}

export default function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  duration = 600,
  direction = 'up',
  triggerOnce = true,
  style,
  ...rest
}) {
  const transitionDuration = Math.max(duration, 0)
  const transitionDelay = Math.max(delay, 0)
  const [ref, isVisible] = useReveal({ once: triggerOnce })

  const classes = [
    'reveal-base',
    directionClass[direction] || directionClass.up,
    isVisible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inlineStyles = {
    transitionDuration: `${transitionDuration}ms`,
    transitionDelay: `${transitionDelay}ms`,
    ...style,
  }

  return (
    <Component ref={ref} className={classes} style={inlineStyles} {...rest}>
      {children}
    </Component>
  )
}
