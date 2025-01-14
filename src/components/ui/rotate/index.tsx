import React from 'react'

const RotateImg = () => {
  setTimeout(() => {
    // @ts-ignore
    const rect1 = document.getElementById('rotate-img-1')
    // @ts-ignore
    const rect2 = document.getElementById('rotate-img-2')

    const tx1 = 1
    let angle1 = 0
    const tx2 = 1
    let angle2 = 0

    let currentAngleImg1, currentAngleImg2

    function getAngleToRADImg1() {
      if (angle1 === 2360) {
        angle1 = 0
      }

      return (angle1-- * Math.PI) / 1180
    }

    function getAngleToRADImg2() {
      if (angle2 === 2360) {
        angle2 = 0
      }

      return (angle2++ * Math.PI) / 1180
    }

    function update() {
      currentAngleImg1 = getAngleToRADImg1()
      currentAngleImg2 = getAngleToRADImg2()

      rect1.style.transform =
        'matrix(' + Math.cos(currentAngleImg1) + ',' + Math.sin(currentAngleImg1) + ',' + -Math.sin(currentAngleImg1) + ',' + Math.cos(currentAngleImg1) + ',' + tx1 + ',' + tx1 + ')'
      rect2.style.transform =
        'matrix(' + Math.cos(currentAngleImg2) + ',' + Math.sin(currentAngleImg2) + ',' + -Math.sin(currentAngleImg2) + ',' + Math.cos(currentAngleImg2) + ',' + tx2 + ',' + tx2 + ')'

      // @ts-ignore
      window.requestAnimationFrame(update)
    }

    update()
  }, 300)

  return <></>
}

export default RotateImg
