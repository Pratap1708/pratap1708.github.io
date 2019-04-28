import React, { Component } from 'react';

class Resultcontainer extends React.Component {
   render() {
    let data = '';
    let dataList= '';
    if (this.props.weatherdata.city){

        data = this.props.weatherdata;
        dataList = data.list.slice(0, 10);
        return (
         <section className="result-grid">
            
            <h4><i className="fa fa-map-marker" aria-hidden="true"></i>{ data.city.name }, { data.city.country }, {`${new Date()}`}</h4>
            {dataList.map((item, index) => {
                return <div className="result-tile">
                            <div className="date">{item.dt_txt}</div>
                            <div className="icon-holder">
                                <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                            </div>
                            <div className="temperature">{`${item.main.temp - 273.15}.toFixed(2)`} °C</div>
                        </div>
            })}
            
         </section>
      );
    }
     else return(
        <section> <h2><em>Search you City by above Input field to get Weather Updates!!!</em></h2></section>
    ); 
   }
}

export default Resultcontainer;