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

<!-- <div>
<img src={angelbaseball} alt='Angel'/>
<img src={angeleyes} alt='Angel'/>
<img src={angelsnowy} alt='Angel'/>
<img src={angelwalkway} alt='Angel'/>
<img src={babyweirdo} alt='Angel'/>
</div> -->


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
		border-right: 1px solid white;
		padding: 1rem;
		min-width: 90vw;
		height: 90vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
	}
	img	{
		position: absolute;
		top: 75%;
		transform: translateY(-50%);
		text-align: center;
		width: 100%;
		left: 0;
	}
</style>


