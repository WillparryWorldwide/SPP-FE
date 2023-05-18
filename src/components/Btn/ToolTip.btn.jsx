// import Tooltip from '@mui/material/Tooltip';
// import TrainIcon from '@mui/icons-material/Train';
// import AgricultureIcon from '@mui/icons-material/Agriculture';
// import SchoolIcon from '@mui/icons-material/School';
// import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
// import PowerIcon from '@mui/icons-material/Power';
// import GroupsIcon from '@mui/icons-material/Groups';
// import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
// import AddRoadIcon from '@mui/icons-material/AddRoad';

// const icons = {
//     agriculture: <AgricultureIcon sx={{width: 20}} />,
//     road: <AddRoadIcon sx={{width: 20,}} />,
//     train: <TrainIcon sx={{width: 20,}} />,
//     group: <GroupsIcon sx={{width: 20,}} />,
//     power: <PowerIcon sx={{width: 20,}} />,
//     power: <ElectricBoltIcon sx={{width: 20}} />,
//     health: <HealthAndSafetyIcon sx={{width: 20,}} />,
//     school: <SchoolIcon sx={{width: 20}} />
// }

// export default function TooltipBtn({ title, onClick, isActive}) {
//     let titleCapitalize = title.charAt(0).toUpperCase() + title.slice(1);
    

//     return <Tooltip title={titleCapitalize}>
//         <button onClick={onClick} type="button" className={`text-inherit sidebarbutton ${isActive === title && 'sidebarbutton-active'}`}>
//             {icons[title]}
//             <p className='pl-1 md-hidden'>{titleCapitalize}</p>
//         </button>
//     </Tooltip>
// } 