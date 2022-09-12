<script>
import angeleyes from "../../angeleyes.jpg"

import { fade } from 'svelte/transition'

let sections = [angeleyes]

</script>

<nav>
  <a class="hover:animate-pulse text-white text-xl" href='/'>home</a>
</nav>
<br/>
<div class="container">
  <h1 class="text-6xl mt-16"><strong>Angel</strong></h1>
  <br/>
  <br/>
  <p>
    Angel is a sweet and outrageously funny American Bully XL. She was born in Queens NY, on January 26th, 2019 and came home June 7th that same year. She enjoys going to the beach, eating peanut butter, cuddles and destroying toys. Her favorite color is pink, and she will not think twice about stealing the candy straight from your mouth!
  </p>
  <br/>

  <img src={angeleyes} alt="angel baby" />
</div>



<!-- <div class="slider">
	{#each sections as section}
		<section>
			<img src={section} alt='angel'>
		</section>
	{/each}
</div> -->


<style>
  .container {
    position: relative;
    max-height:50vh;
    max-width: 80vw;
    /* left: 50%; */
    margin-right: -50%;
  }
  img {
  position: relative;
  max-height:50vh;
    max-width: 50vw;
}
	/* * {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	} */
	/* .slider {
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
	} */
	/* section {
		padding: 1rem;
		min-width: 100vw;
		height: 100vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
	} */

  a {
  text-decoration: none;
  position: relative;
}

a::before {
  content: '';
  background-color: #A4C3B2;
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 8px;
  z-index: -1;
}
a:hover::before {
  bottom: 0;
  height: 100%;
}
a::before {
  content: '';
  background-color: #A4C3B2;
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 8px;
  z-index: -1;
  transition: all .3s ease-in-out;
}
</style>


