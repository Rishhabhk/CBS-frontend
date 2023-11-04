import React from 'react'
import Navbar from '../Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import userImage from '../../assets/pic.jpeg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TaskVidContainer from './TaskVidContainer';
import '../../data/TaskData'
import { TaskData } from '../../data/TaskData';
import './Explore.css'
import HotsBlogs from './HotsBlogs';

const Explore = () => {

  return (
    <div className='explore'>
      <div className="exploreMainContent">
        {
          TaskData.map((task) => (
            <div className='taskContainer'> 
             {task.taskName}
            <TaskVidContainer />
            </div>
          ))
        }
      </div>
      <div className="exploreAsideContent">
        <HotsBlogs/>
      </div>
    </div>
  )
}

export default Explore