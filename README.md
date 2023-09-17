# React + Vite

useEffect(() => {

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          entry.target.classList.add(cx("active"));
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const target1 = textRef.current;
    observer.observe(target1);

}, []);

# class

import className from "classnames/bind";
import styles from "./ModalAddNewUser.module.scss";
const cx = className.bind(styles);

# motion

<motion.div
initial={{ opacity: 0, scale: 0, translateY: -80 }}
whileInView={{ opacity: 1, scale: 1, y: 80 }}
transition={{ duration: 1 }}
viewport={{ once: true }} 
>
</motion.div>
