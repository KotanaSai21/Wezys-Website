import{r as t,j as s}from"./index-B_WzvGt_.js";import{H as a}from"./Header-7mOjgCd9.js";function d(){const[r,o]=t.useState([]);return t.useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json()).then(e=>{const i=e.slice(0,10).map(c=>({...c,imageUrl:"https://via.placeholder.com/150"}));o(i)}).catch(e=>{console.error("Error fetching the blog posts",e)})},[]),s.jsxs("div",{children:[s.jsx(a,{}),s.jsx("h1",{children:"Blog Page"}),s.jsx("div",{className:"blog-list",children:r.map(e=>s.jsxs("div",{className:"blog-item",children:[s.jsx("h2",{children:e.title}),s.jsx("img",{src:e.imageUrl,alt:e.title}),s.jsx("p",{children:e.body}),s.jsx("a",{href:`/blog/${e.id}`,children:"Read more"})]},e.id))})]})}export{d as default};
