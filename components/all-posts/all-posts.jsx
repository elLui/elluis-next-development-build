function Box() {
	return null;
}


export default function Header() {


	gsap.to( ".box", { duration : 1, x : 200, rotation : 360, ease : "power2.out" } );

	return (

		<div className={styles.header}>

			<div className="box green">

				<Box/>

			</div>

		</div> )
}