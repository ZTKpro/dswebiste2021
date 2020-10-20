import React from "react"
import "../components/404.scss"

const NotFoundPage = () => (
 <div className="error">
     <div>
        <h2>404 PAGE NOT FOUND</h2>
        <a href="/"><div className="g-btn"><p>Return to homepage</p></div></a>
     </div>
     <div className="circle-0"></div>
     <div className="circle-1"></div>
 </div>
)

export default NotFoundPage
