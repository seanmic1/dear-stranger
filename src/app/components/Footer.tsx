import { css } from "../../../styled-system/css";

export default function Footer() {
  return (
    <div className={css({p:4, bottom: 0})}>Made by Sean Michael <br/> <a href="https://seanml.com" className={css({color:"blue.500"})}>seanml.com</a></div>
  )
}
