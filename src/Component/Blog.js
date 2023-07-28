import React, { useState } from 'react'
import '../Component/Style/Blog.css'

const Blog = () => {

  const [show,setshow] = useState(false)

  return (
    <div className='Blog' id='blog'>
         <div className='Blog-heading'>
          <div className='Blog-logo'> <span></span><h4>Latest Blog</h4> </div>
          <h2>My Latest News</h2>
        </div>
      <div className='Blog-container'>
        <div className='Blog-card'>
          <div className='Blog-image'>
            <div>designer</div>
            <img src="https://tonu-light.netlify.app/static/media/img-1.e734b0bb0e13bb49ddb4.jpg" alt="" />
          </div>
          <div className='Blog-body'>
            <span>25 Dec, 2023 By <a href='/#'>Marilou</a> </span>
            <h1>Helpful tips for become a successful designer</h1>
            <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
          </div>
        </div>

        <div className='Blog-card'>
          <div className='Blog-image'>
            <div>developer</div>
            <img src="https://tonu-light.netlify.app/static/media/img-2.52ac18da98b1748c9975.jpg" alt="" />
          </div>
          <div className='Blog-body'>
            <span>13 Dec,2023 By <a href='/#'>Konal</a></span>
            <h1>Master These Awesome New Skills in May 2023</h1>
            <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
          </div>
        </div>

        <div className='Blog-card'>
          <div className='Blog-image'>
            <div>Fashion</div>
            <img src="https://tonu-light.netlify.app/static/media/img-3.76f40cff48ee5f735029.jpg" alt="" />
          </div>
          <div className='Blog-body'>
            <span>22 Dec,2023 By <a href='/#'>Aliza</a></span>
            <h1>We provide solutions growin your business</h1>
            <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
          </div>
        </div>

        { show ? <><div className='Blog-card'>
          <div className='Blog-image'>
            <div>Fashion</div>
            <img src="https://tonu-light.netlify.app/static/media/img-4.32edbb538d30dbcafcc2.jpg" alt="" />
          </div>
          <div className='Blog-body'>
            <span>13 Dec,2023 By<a href='/#'>Biry</a> </span>
            <h1>Many desktop publish package editors use.</h1>
            <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
          </div>
        </div>

        <div className='Blog-card'>
          <div className='Blog-image'>
            <div>developer</div> 
            <img src="https://tonu-light.netlify.app/static/media/img-5.d8b9f5269ed2f558e5b2.jpg" alt="" />
          </div>
          <div className='Blog-body'>
            <span>13 Dec,2023 By<a href='/#'>Sharah</a></span>
            <h1>The definitive list of digital products you can sell</h1>
            <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
          </div>
        </div>

        <div className='Blog-card'>
          <div className='Blog-image'>
            <div>Fashion</div>
            <img src="https://tonu-light.netlify.app/static/media/img-6.915259f9360f36e8736e.jpg" alt="" />
          </div>
          <div className='Blog-body'>
            <span>22 Dec,2023 By<a href='/#'>Maria</a></span>
            <h1>Nemo enim ipsam voluptatem quia voluptas.</h1>
            <p>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</p>
          </div>
        </div> </> : null}
          { !show ? <div className='Blog-button-div'>
            <button onClick={() => setshow(true)}>View All Work</button>
          </div> : null }
      </div>
    </div>
  )
}

export default Blog