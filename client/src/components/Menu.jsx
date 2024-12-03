import React from 'react'

const Menu = () => {
    const posts =[
        {
          "id": 1,
          "title": "Product 1: A Revolutionary Gadget",
          "desc": "Introducing our groundbreaking Product 1, designed to streamline your daily life. With its sleek design and cutting-edge features, this innovative device offers unparalleled efficiency and convenience. Experience the future of technology today.",
          "img": "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
        },
        {
          "id": 2,
          "title": "Product 2: Elevate Your Lifestyle",
          "desc": "Indulge in the epitome of luxury with Product 2. Crafted with precision and style, this exquisite product is tailored to enhance your lifestyle. Immerse yourself in a world of comfort and sophistication.",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHPQNMK8eB2GPOejRXqnEN0zKdJBovnP6emBhaCg4i8cu-5Fb7No4Q5H9e6tG5-uREl8&usqp=CAU"
        },
        {
          "id": 3,
          "title": "Product 3: Your Personal Assistant",
          "desc": "Discover the power of intelligent automation with Product 3. This versatile tool is your personal assistant, ready to handle your tasks, from scheduling appointments to managing your finances. Simplify your life and reclaim your time.",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTfiUIzxhWa9dNhVte3RvMeeyA6wfbnoORQ&s"
        },
        {
          "id": 4,
          "title": "Product 4: Sustainable Solutions for a Brighter Future",
          "desc": "Embrace sustainability with Product 4. Our eco-friendly solution is committed to minimizing environmental impact while delivering exceptional performance. Join us in creating a greener tomorrow.",
          "img": "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
        },
        
      ] 
  return (
    <div className='menu'>
    <h1>Other posts you may like also </h1>
    {posts.map(post=>(
        <div className='post' key={post.id}>
        <img src={post.img} alt="" />
        <h2>{post.title}</h2>
        <button>Read More</button>
        </div>
    ))}
    </div>
  )
}

export default Menu