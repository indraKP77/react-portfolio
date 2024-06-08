import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h2>My Projects</h2>
        <div className="project-items">
        <div class="card">
  <div class="card-details">
    <p class="text-title">Restaurant</p>
    <p class="text-body">A replica of a restaurant website</p>
  </div>
  <a href="https://food-del-indra.netlify.app/"><button class="card-button">Go to website</button></a>
</div>
<div class="card">
  <div class="card-details">
    <p class="text-title">Shoestore</p>
    <p class="text-body">A replica of an online shoe store</p>
  </div>
  <a href="https://shoestoreindra.netlify.app/"><button class="card-button">Go to website</button></a>
</div>
<div class="card">
  <div class="card-details">
    <p class="text-title">E-commerce</p>
    <p class="text-body">A replica of an online shopping website</p>
  </div>
  <a href="https://indrakp77.github.io/ecommerce/"><button class="card-button">Go to website</button></a>
</div>
</div>
    </div>
  )
}

export default Projects
