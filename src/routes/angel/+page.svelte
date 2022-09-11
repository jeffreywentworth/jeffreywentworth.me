<script>
import angelbaseball from "../../angelbaseballfield.jpg"
import angeleyes from "../../angeleyes.jpg"
import angelsnowy from '../../angelsnowivy.jpg'
import angelwalkway from '../../angelwalkway.jpg'
import babyweirdo from '../../babyweirdoangel.jpg'
import { fade } from 'svelte/transition'

let sections = [
		angelbaseball,
		angeleyes,
		angelsnowy,
		angelwalkway,
		babyweirdo,
	]

</script>

<nav>
  <a class="hover:animate-pulse text-white text-xl" href='/'>home</a>
</nav>
<br/>
<br/>
<h1 class="text-5xl mt-16"><strong>Angel</strong></h1>
<br/>
<p>
  Angel was born on January 26th, 2019. She enjoys going to the beach, eating peanut butter, cuddles and destroying toys.
</p>
<br/>
<div class="slider">
	{#each sections as section}
		<section>
			<img src={section} alt='angel'>
		</section>
	{/each}
</div>


<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.slider {
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
	}
	section {
		padding: 1rem;
		min-width: 80vw;
		height: 70vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
	}
	img	{
		position: absolute;
		top: 75%;
		transform: translateY(-50%);
		/* width: 100%; */
		left: 0;
	}

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


