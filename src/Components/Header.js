import React, { Component } from 'react'
import '../App.css';
import  AccessAlarmsIcon  from '@mui/icons-material/AccessAlarms';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';
import { Icon } from '@iconify/react';


const getPopularDishList = async () => {
let res =await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/",{
    method:"GET",
});
let list = await res.json();
console.log(list);
return list.popularDishes;
};
const getDishList = async () => {
    let res =await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/",{
        method:"GET",
    });
    let list = await res.json();
    console.log(list);
    return list.dishes;
    };
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dishes:[],
             popularDishes:[],
        }
    }

    componentDidMount() {
        getPopularDishList().then((popularDishes) => {
            this.setState({
                
                popularDishes:popularDishes,
            
            })
        }
        );
        getDishList().then((dishes) => {
            this.setState({
                
                dishes:dishes,
            
            })
        }
        );
    }

    
  render() {
      
    return (
        // <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div className = "main">
        <div className = "select_dishes"><ArrowBackIosIcon />Select Dishes</div><hr className = "hr" />
            <div class="header">
                <div>
                    <span className='date_time'><div className="icon_div"><CalendarMonthIcon /></div> 21 May 2021</span>
                    <span className="vl"></span>
                    <span className='date_time'><div  className="icon_div"><AccessAlarmsIcon /></div>10:30 Pm -12:30 Pm</span>
                </div>
            </div>
            <div className="cuisine_list_div">
                <ul className = 'cuisine_list'>
                    <li className="categories selected">Italian</li>
                    <li className="categories">Indian</li>
                    <li className="categories">Chinese</li>
                    <li className="categories">English</li>
                    <li className="categories">Spanish</li>
                </ul>
            </div>
            <div className="popular_head">Popular Dishes</div>
          <div className="popularDishes">
              
              <div className="modules">
              {this.state.popularDishes.map((item) => (
                  <div className="item" key ="{item.id}">
                    <img className="popularDishImage" src={item.image} alt="" />
                    <span className="dishName">{item.name}</span>
                  </div>
              )
              )
              }
            </div>
          </div>

          <div className='dish'>
              <div className="dishmenu">
                  <h1 className="alignleft">Recommended <div className="dropdown"><ArrowDropDownIcon /></div></h1>
                  <h3 className="alignright">Menu</h3>
              </div>
              <div className='dishmain'>
              
              {this.state.dishes.map((foodList) => (
                  
                <div className="card-container" onClick={() => {alert("Checking")}} key ="{foodList.id}">
                <div className="float-layout">
                    <div className="card-image">
                    
                    <div className="card">
                        <div className="card-title">{foodList.name}  <span className="ratingStyle"><span className="rating">{foodList.rating}</span><StarIcon fontSize="20" /></span></div>
                        <div className="card-desc">
                            <div><Icon icon="mdi:fridge" /><Icon icon="mdi:fridge" />{foodList.equipments} | Ingredients </div>
                            <div>{foodList.description}</div>
                        </div>
                    </div>
                    
                    <img src={foodList.image} alt=""/>
                    
                    </div>
                </div>
                <button className="add_button">Add</button>
                </div>                  
              )
              )
              }
              </div>    
          </div>
           <div className="float-button">
                  <button>3 Food items selected</button>
              </div>

      </div>
    //   {/* </meta> */}
    )
  }
}
