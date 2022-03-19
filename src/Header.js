//! We can create a Component in React via 2 ways.
//! 1-) Function-based (state of the art )
//! 2-) Class-based (more complex and less effective)

//? React uses JSX.
//? In JSX, we can directly use HTML elements in JS

//! Components can return a combined HTML,CSS,JS code.
//! But, it must return a single containered (like div, section, article, <> etc.) element
function Header () {
   return ( <div>
       <h1>CLARUSWAY</h1> 
        <p>Reinvent Yourself</p>
   </div>
   )
}
export default Header;