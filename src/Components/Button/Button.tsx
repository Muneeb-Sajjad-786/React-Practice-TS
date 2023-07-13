 import styles from "./Button.module.css"

interface Props {
    color? : 'primary' | 'secondry' | 'danger';
    onClick: () => void
}
 
 const Button = ( {color, onClick} : Props) => {
   return (
     <div className={[styles.btn, styles['btn-' + color]].join(" ")} onClick={onClick} >My Button</div>
   )
 }
 
 export default Button