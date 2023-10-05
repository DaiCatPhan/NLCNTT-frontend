# React + Vite

# class

import className from "classnames/bind";
import styles from "./ .module.scss";
const cx = className.bind(styles);

# motion

<motion.div
initial={{ opacity: 0, scale: 0, translateY: -80 }}
whileInView={{ opacity: 1, scale: 1, y: 80 }}
transition={{ duration: 1 }}
viewport={{ once: true }}

> </motion.div>
