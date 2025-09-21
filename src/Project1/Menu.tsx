import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {


  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <p className="navbar-brand" ><img src="https://img.freepik.com/premium-psd/quiz-time-text-effect-font-editable-typography-3d-text_506432-2526.jpg?ga=GA1.1.1649654487.1749968287&semt=ais_hybrid&w=740" alt="" style={{ width: "50px" }} /></p>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/p2">Page 2</Link></li> */}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li> */}
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
        </div>
      </nav>


      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
          <div className="item active">
            <img src="https://as1.ftcdn.net/jpg/02/90/39/00/1000_F_290390054_92MXhhVdHu46JuZnl3xK9e7w2jlv33O3.webp" alt="Science" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          {/* https://img.freepik.com/premium-psd/quiz-time-text-effect-font-editable-typography-3d-text_506432-2526.jpg?ga=GA1.1.1649654487.1749968287&semt=ais_hybrid&w=740 */}
          <div className="item">
            <img src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?ga=GA1.1.1649654487.1749968287&semt=ais_hybrid&w=740" alt="Chicago" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?ga=GA1.1.1649654487.1749968287&semt=ais_hybrid&w=740" alt="New York" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container " >
        <h2>what is Quiz?</h2>
        {/* <p>Click on the button to toggle between showing and hiding content.</p>  */}
        <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo">Click Here to Know</button>
        <div id="demo" className="collapse text-dark bg-info "><h3>
          A quiz is a form of mind sport in which people attempt to answer questions correctly on one or several topics. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, and skills, or simply as a hobby. They can also be televised for entertainment purposes, often in a game show format.
        </h3>
        </div>
        <h2>Has Quiz made value in education? </h2>
        <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo1">Click Here to Know</button>
        <div id="demo1" className="collapse text- dark bg-info"><h3>
          In an educational context, a quiz is usually a form of a student assessment, but often has fewer questions of less difficulty and requires less time for completion than a test. This use is typically found in the United States, Canada, the Philippines, Dominican Republic and some colleges in India. For instance, in a mathematics classroom, a quiz may check comprehension of a type of mathematical exercise. Some instructors schedule a daily or weekly quiz ranging from five to thirty relatively easy questions for the purpose of having the students review their previous lessons before attending the next class. A "pop quiz" is a quiz that students are given no time to prepare for; they are simply surprised with it in class.
        </h3>
        </div>
      </div>


      {/* <!-- Remove the container if you want to extend the Footer to full width. --> style={{ width: '100%', height: '400px'*/}
      <div className="container my-5">

        <footer className="text-center text-white" style={{ backgroundColor: " #f1f1f1;" }}>

          © 2020 Copyright:

        </footer>

      </div>

    </>
  )
}

export default Menu;
