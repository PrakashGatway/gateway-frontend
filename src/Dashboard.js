import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
             
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            {/* <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div> */}
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            {/* <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div> */}
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            {/* <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div> */}
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            {/* <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
            </div> */}
          </div>
          {/* ./col */}
        </div>
        
      </div>
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }
}
