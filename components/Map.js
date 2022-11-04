import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style={
    wrapper:`flex-1 h-full w-full`,
}

mapboxgl.accessToken=process.env.MAPBOX_ACCESS_TOKEN
console.log(process.env.MAPBOX_ACCESS_TOKEN);
const Map = () => {
   useEffect(()=>{
       const map=new mapboxgl.Map({
           container:'map',
           style:'mapbox://styles/shashwatjais/cla2b0g93000j16r5zt6tpx3u',
           center:[-99,.29011,39.],
           zoom:3,
       })
   },[])
  return (
    <div className={style.wrapper} id='map'>hh</div>
  )
}

export default Map