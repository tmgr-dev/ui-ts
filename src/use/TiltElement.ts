import {
  ref,
  reactive,
  onMounted,
  nextTick
} from 'vue';

interface CustomMouseEvent {
  layerX: number;
  layerY: number;
}

const initTilt = () => {
  let tilt = reactive({} as HTMLElement);
  const widthObject = ref(0);
  const heightObject = ref(0);

  onMounted(() => {
    nextTick().then(() => {
      tilt = document.querySelector('#tilt') as HTMLElement
      widthObject.value = tilt.clientWidth
      heightObject.value = tilt.clientHeight
    })
  })

  const mouseMove = (e: CustomMouseEvent) => {
    if (tilt) {
      const xVal = e.layerX
      const yVal = e.layerY
      const yRotation = 20 * ((xVal - widthObject.value / 2) / widthObject.value)
      const xRotation = -20 * ((yVal - heightObject.value / 2) / heightObject.value)
      tilt.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
    }
  }

  const mouseOut = () => {
    tilt.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
  }

  return {
    tilt,
    mouseMove,
    mouseOut
  }
}

export default initTilt