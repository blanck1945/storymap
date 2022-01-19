import React, {useState, useEffect} from "react";

const index = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
  console.warn({scrollPosition})
  return (
    <div>
      <p>world page</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur aperiam illo dolorem voluptate autem perferendis accusamus exercitationem aliquid ex eius magni recusandae, accusantium asperiores debitis expedita voluptates cumque vero.</p>

    </div>
  );
};

export default index;
