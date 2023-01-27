
import { Link } from 'react-router-dom'

export const Home = () => {


  return (
    <div className="bg-stone-800">
      <div className="">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/HTfTTMz4ROI" title="YouTube video player"  allow="autoplay; " allowFullScreen ></iframe>
      </div>
      <div className="sm:flex md:flex lg:flex">
  <img className="p-8" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/331/445/products/clasicos-51-6664d30e10388339b016672201478278-320-0.png" alt='gym'></img>
  <p className="ml-auto text-lg text-zinc-200 p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit sed molestiae laudantium ipsum ducimus totam, consectetur ratione saepe aliquid magni tempora provident corrupti doloremque, libero quisquam rem dolorem ea veniam ullam quia quis. Commodi doloribus nam distinctio soluta cumque. Repellendus aliquid culpa ratione nostrum expedita pariatur, earum praesentium exercitationem beatae cumque, obcaecati .</p>
</div>
      <div className=" flex-row-reverse sm:flex md:flex lg:flex">
  <img className="p-8" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/331/445/products/clasicos-51-6664d30e10388339b016672201478278-320-0.png" alt='gym'></img>
  <p className="ml-auto text-lg text-zinc-200 p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit sed molestiae laudantium ipsum ducimus totam, consectetur ratione saepe aliquid magni tempora provident corrupti doloremque, libero quisquam rem dolorem ea veniam ullam quia quis. Commodi doloribus nam distinctio soluta cumque. Repellendus aliquid culpa ratione nostrum expedita pariatur, earum praesentium exercitationem beatae cumque, obcaecati .</p>
</div>
<div className="sm:flex md:flex lg:flex">
  <img className="p-8" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/331/445/products/clasicos-51-6664d30e10388339b016672201478278-320-0.png" alt="gym"></img>
  <p className="ml-auto text-lg text-zinc-200 p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit sed molestiae laudantium ipsum ducimus totam, consectetur ratione saepe aliquid magni tempora provident corrupti doloremque, libero quisquam rem dolorem ea veniam ullam quia quis. Commodi doloribus nam distinctio soluta cumque. Repellendus aliquid culpa ratione nostrum expedita pariatur, earum praesentium exercitationem beatae cumque, obcaecati .</p>
</div>
<div className="flex flex-col items-center">
  <Link to={`/products`}><button className="btn bg-red-500 hover:bg-black rounded-full p-4 m-2 font-bold text-zinc-300">VER TODOS NUESTROS PRODUCTOS</button>
  </Link>
</div>



</div>
  )
}
