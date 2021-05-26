import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {BsBell} from 'react-icons/bs'
import {Bar, Line} from "react-chartjs-2";
import {connect} from "react-redux";

const Dashboard = (props) => {
    const cards = [
        {title:"Foydalanuvchilar soni", count: 0, background: "background-root-1"},
        {title:"Axborot", count: 0, background: "background-root-2"},
        {title:"Zakaz aborot", count: 0, background: "background-root-3"},
        {title:"Mahsulotlar", count: 0, background: "background-root-4"},
    ]
    return (
        <div className="color">
        <nav className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <h5 className="d-flex align-items-center m-0 p-4 chiziq">Dashboard</h5>
                <AvForm className="d-flex">
                    <AvField name="from" type="date" label="Dan" validate={{date: {format: 'MM/DD/YYYY'}}} />
                    <AvField name="to" type="date" label="Gacha" validate={{date: {format: 'MM/DD/YYYY'}}}/>
                </AvForm>
            </div>
            <div className="d-flex p-3">
                <BsBell className="m-auto"/>
                <div className="ml-2">
                    <div>Super Admin</div>
                    <div>Adminstrator</div>
                </div>
            </div>
        </nav>
        <div>
            <div className="row ">
                {cards.map(item=>{
                    return(
                        <div className="col-3">
                            <div className={`"card p-2 m-2 " ${item.background}`}>
                                <h3>{item.title}</h3>
                                <p>{item.count}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="row m-0 d-flex justify-content-betweenx">
                <div className="col-6">
                    <div className="card p-2 m-2">
                        <Line type="line" options={props.options}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card m-2 p-2">
                        <Bar type="bar" options={props.barChartOptions} data={props.barchartData}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
const mapStateToProps =(state)=>{
    return{
        lineChartOptions: state.chartLine.options,
        barChartOptions: state.barChart.options,
        barchartData: state.barChart.data,
    }
}

export default connect(mapStateToProps,null)(Dashboard);