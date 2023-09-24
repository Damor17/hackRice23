import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p className={FooterCSS["privacy-text"]}>Privacy Policy</p>
      <p>Terms of Use</p>
      <p>Help</p>
      <h6 className={FooterCSS["copyright-txt"]}>Copyright © 2023 Track Rice</h6>
    </footer>
  );
}
 
export default Footer;