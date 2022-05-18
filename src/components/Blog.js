import React from 'react'
import './Blog.css'

function Blog(){
  
    const blogs=[
      {
        name:'Scaler #365daysofcoding chanllenge',
        Link:'https://getdsa.blogspot.com/2022/01/scaler-365daysofcoding-chanllenge.html',
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      },
      {
        name:'implementing dfs, bfs and graph',
        Link:'https://getdsa.blogspot.com/2021/12/implementing-dfs-bfs-and-graph-binary.html',
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      },
      {
        name:'Implementing the operations of BST',
        Link:'https://getdsa.blogspot.com/2021/12/implementing-operations-of-bst.html',
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
 
      },
      {
        name:'Implementing tower of hanoi ',
        Link:'https://getdsa.blogspot.com/2021/12/implementing-tower-of-hanoi-convert.html',
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      }



    ];
    
    return (
    <div className='blog'>
      <h1>Following are some of my Blog do check them out 😁😁😁 and yes do give your  comment on them</h1>
      <div className="blogdiv">
 {blogs.map((b)=>(
       <div className='mapblog'>
         <img src={b.image} alt='blogimg'/>
          <b>{b.name}</b>
          <button><a href={b.Link} target='_blank' rel='noreferrer'>go to blog</a></button>
          </div>
      ))}
</div>
<b>This is my blog website link:</b>
<button><a href='https://getdsa.blogspot.com/' target='_blank' rel='noreferrer'>blog website</a></button>
    </div>
  )
}

export default Blog